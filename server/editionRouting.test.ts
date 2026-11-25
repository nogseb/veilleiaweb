import { once } from "node:events";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import express from "express";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { editionRouting } from "./editionRouting";

const fallbackHtml =
  "<!doctype html><html><body>Existing application</body></html>";
let server: Server;
let baseUrl: string;

function request(path: string, method = "GET") {
  return fetch(`${baseUrl}${path}`, { method, redirect: "manual" });
}

beforeAll(async () => {
  const app = express();
  // APIs remain ahead of edition routing, as in the application server.
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });
  app.use(editionRouting);
  app.use((_req, res) => {
    res.setHeader("X-HTML-Fallback", "yes");
    res.status(res.statusCode).type("html").send(fallbackHtml);
  });

  server = createServer(app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(async () => {
  if (!server) return;
  await new Promise<void>((resolve, reject) => {
    server.close(error => (error ? reject(error) : resolve()));
    server.closeIdleConnections();
  });
});

describe("edition routing over HTTP", () => {
  it("permanently redirects legacy week 47 to the frozen 2026 edition with its query unchanged", async () => {
    const query =
      "?utm_source=teams&utm_campaign=S47&value=a%2Fb&tag=one&tag=two";
    const response = await request(`/semaine/47${query}`);

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(`/2026/47${query}`);
    expect(response.headers.get("x-html-fallback")).toBeNull();
    await response.text();
  });

  it("serves an exact canonical edition without redirecting", async () => {
    const response = await request("/2026/47?utm_source=teams");

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-html-fallback")).toBe("yes");
    expect(await response.text()).toBe(fallbackHtml);
  });

  it.each([
    ["/2026/47/", "/2026/47"],
    ["/2026/47/?utm_source=teams", "/2026/47?utm_source=teams"],
    ["/semaine/47/", "/2026/47"],
    ["/semaine/47/?utm_source=teams", "/2026/47?utm_source=teams"],
  ])("normalizes the trailing slash in %s", async (path, target) => {
    const response = await request(path);

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(target);
    expect(response.headers.get("x-html-fallback")).toBeNull();
    await response.text();
  });

  it.each([
    "/2027/47",
    "/2027/47/?utm_source=teams",
    "/2026/00",
    "/2026/54",
    "/2026/00/",
    "/2026/54/",
    "/semaine/00",
    "/semaine/54",
  ])("keeps the existing HTML fallback with status 404 for %s", async path => {
    const response = await request(path);

    expect(response.status).toBe(404);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-html-fallback")).toBe("yes");
    expect(response.headers.get("content-type")).toContain("text/html");
    expect(await response.text()).toBe(fallbackHtml);
  });

  it.each([
    ["/semaine/47?utm_source=teams", 301, "/2026/47?utm_source=teams"],
    ["/2026/47/", 301, "/2026/47"],
    ["/2026/47", 200, null],
    ["/2027/47", 404, null],
    ["/2026/00", 404, null],
    ["/2026/54", 404, null],
  ])(
    "applies the same status and location to HEAD %s, with no body",
    async (path, status, location) => {
      const response = await request(path, "HEAD");

      expect(response.status).toBe(status);
      expect(response.headers.get("location")).toBe(location);
      expect(response.headers.get("x-html-fallback")).toBe(
        status === 301 ? null : "yes"
      );
      expect(await response.text()).toBe("");
    }
  );

  it.each([
    "/",
    "/archives",
    "/about",
    "/stats",
    "/404",
    "/api",
    "/api/trpc/example",
    "/src/main.tsx",
    "/assets/app.js",
  ])("leaves the unrelated path %s untouched", async path => {
    const response = await request(path);

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
    expect(await response.text()).toBe(fallbackHtml);
  });

  it("does not interfere with an API registered before the middleware", async () => {
    const response = await request("/api/health");

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-html-fallback")).toBeNull();
    expect(await response.json()).toEqual({ ok: true });
  });

  it.each(["POST", "PUT", "PATCH", "DELETE", "OPTIONS"])(
    "does not redirect or change the status of %s edition requests",
    async method => {
      for (const path of ["/semaine/47", "/2026/47/", "/2027/47", "/2026/00"]) {
        const response = await request(path, method);

        expect(response.status).toBe(200);
        expect(response.headers.get("location")).toBeNull();
        expect(response.headers.get("x-html-fallback")).toBe("yes");
        expect(await response.text()).toBe(fallbackHtml);
      }
    }
  );
});
