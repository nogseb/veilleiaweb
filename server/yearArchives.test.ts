import { once } from "node:events";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import express from "express";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { archives } from "../client/src/data/archives";
import { resolveYearRoute, yearPath } from "../shared/editionRouting";
import {
  injectSocialMetadata,
  renderSocialHead,
  SITE_ORIGIN,
  socialMetadataForPath,
} from "../shared/socialMetadata";
import { editionRouting } from "./editionRouting";

const editions2026 = archives.filter(edition => edition.year === 2026);
const fallbackHtml =
  "<!doctype html><html><head><title>Existing application</title></head><body>Existing application</body></html>";
const robotsNoindex = '<meta name="robots" content="noindex, nofollow" />';
let server: Server;
let baseUrl: string;

function request(path: string, method = "GET") {
  return fetch(`${baseUrl}${path}`, {
    method,
    redirect: "manual",
    signal: AbortSignal.timeout(3000),
  });
}

beforeAll(async () => {
  const app = express();
  // Keep API handling ahead of routing, like the existing server tests.
  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });
  app.use(editionRouting);
  app.use((req, res) => {
    res.setHeader("X-HTML-Fallback", "yes");
    res.status(res.statusCode).type("html").send(
      injectSocialMetadata(fallbackHtml, req.originalUrl)
    );
  });

  server = createServer(app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}, 5000);

afterAll(async () => {
  if (!server) return;
  await new Promise<void>((resolve, reject) => {
    server.close(error => (error ? reject(error) : resolve()));
    // Native fetch keeps sockets alive: explicitly close all of them.
    server.closeAllConnections();
  });
}, 5000);

describe("annual archive resolver", () => {
  it(`returns all ${editions2026.length} available 2026 editions`, () => {
    const route = resolveYearRoute("/2026/");

    expect(editions2026.length).toBeGreaterThan(0);
    expect(route).toEqual({
      isYearPath: true,
      year: 2026,
      editions: editions2026,
      canonicalPath: "/2026/",
    });
    expect(route.editions).toHaveLength(editions2026.length);
    expect(yearPath(2026)).toBe("/2026/");
  });

  it("keeps weeks in descending order without duplicates", () => {
    const weeks = resolveYearRoute("/2026/").editions.map(edition => edition.week);

    expect(weeks).toEqual([...weeks].sort((a, b) => b - a));
    expect(new Set(weeks).size).toBe(weeks.length);
  });

  it.each(["/2026", "/2026/", "/2026?utm_source=teams", "/2026/?utm_source=teams"])(
    "resolves %s to the same canonical annual archive",
    path => {
      expect(resolveYearRoute(path)).toEqual(resolveYearRoute("/2026/"));
      expect(resolveYearRoute(path).canonicalPath).toBe(yearPath(2026));
    }
  );

  it.each([...new Set([...archives.map(edition => edition.year), 2027])])(
    "never includes editions from another year in /%s/",
    year => {
      const route = resolveYearRoute(yearPath(year));

      expect(route.editions).toEqual(archives.filter(edition => edition.year === year));
      expect(route.editions.every(edition => edition.year === year)).toBe(true);
    }
  );

  it.each(["/2027", "/2027/"])("recognizes the empty year %s", path => {
    expect(resolveYearRoute(path)).toEqual({
      isYearPath: true,
      year: 2027,
      editions: [],
      canonicalPath: "/2027/",
    });
  });

  it.each(["/abc", "/0202", "/archives", "/archives/", "/2026/47"])(
    "does not recognize %s as an annual archive",
    path => {
      expect(resolveYearRoute(path)).toEqual({
        isYearPath: false,
        year: undefined,
        editions: [],
        canonicalPath: undefined,
      });
    }
  );
});

describe("annual archive social metadata", () => {
  it.each(["/2026", "/2026/", "/2026?utm_source=teams", "/2026/?utm_source=teams"])(
    "makes available archives indexable with the canonical title and URL for %s",
    path => {
      const meta = socialMetadataForPath(path);
      const head = renderSocialHead(meta);

      expect(meta.title).toBe("Archives 2026 — Veille IA & Web");
      expect(meta.canonicalUrl).toBe(`${SITE_ORIGIN}/2026/`);
      expect(meta.type).toBe("website");
      expect(meta.description).toContain(`${editions2026.length} éditions`);
      expect(meta.noindex).not.toBe(true);
      expect(head).toContain(`<link rel="canonical" href="${SITE_ORIGIN}/2026/" />`);
      expect(head).not.toContain('name="robots"');
    }
  );

  it.each(["/2027", "/2027/?utm_source=teams"])(
    "marks empty annual archives noindex for %s",
    path => {
      const meta = socialMetadataForPath(path);

      expect(meta.title).toBe("Archives 2027 — Veille IA & Web");
      expect(meta.canonicalUrl).toBe(`${SITE_ORIGIN}/2027/`);
      expect(meta.type).toBe("website");
      expect(meta.description).toContain("aucune édition");
      expect(meta.noindex).toBe(true);
      expect(renderSocialHead(meta)).toContain(robotsNoindex);
    }
  );

  it.each([
    ["/archives", "Archives — Veille Stratégique IA & Web"],
    ["/timeline", "Mémoire stratégique — Veille IA & Web"],
    ["/about", "À propos — Veille Stratégique IA & Web"],
  ])("preserves reserved-page metadata for %s", (path, title) => {
    const meta = socialMetadataForPath(path);

    expect(meta.title).toBe(title);
    expect(meta.canonicalUrl).toBe(`${SITE_ORIGIN}${path}`);
    expect(meta.noindex).not.toBe(true);
  });
});

describe.each(["GET", "HEAD"])("annual archive routing over HTTP %s", method => {
  it.each([2026, 2027])("redirects /%s permanently and preserves the exact query", async year => {
    const query = "?utm_source=teams&value=a%2Fb&tag=one&tag=two";
    const response = await request(`/${year}${query}`, method);

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe(`/${year}/${query}`);
    expect(response.headers.get("x-html-fallback")).toBeNull();
    const body = await response.text();
    if (method === "HEAD") expect(body).toBe("");
  });

  it.each(["/2026/", "/2026/?utm_source=teams", "/2027/", "/2027/?utm_source=teams"])(
    "passes canonical %s to the HTML fallback with status 200",
    async path => {
      const response = await request(path, method);
      const body = await response.text();

      expect(response.status).toBe(200);
      expect(response.headers.get("location")).toBeNull();
      expect(response.headers.get("x-html-fallback")).toBe("yes");
      expect(response.headers.get("content-type")).toContain("text/html");
      if (method === "HEAD") {
        expect(body).toBe("");
      } else {
        expect(body).toBe(injectSocialMetadata(fallbackHtml, path));
        expect(body).toContain("Existing application</body>");
        if (path.startsWith("/2027/")) expect(body).toContain(robotsNoindex);
        else expect(body).not.toContain('name="robots"');
      }
    }
  );

  it.each([
    "/", "/archives", "/timeline", "/about", "/stats", "/404",
    "/api", "/api/trpc/example", "/src/main.tsx", "/assets/app.js",
    "/abc", "/0202",
  ])("leaves the reserved or unrelated path %s untouched", async path => {
    const response = await request(path, method);
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-html-fallback")).toBe("yes");
    expect(body).toBe(method === "HEAD" ? "" : injectSocialMetadata(fallbackHtml, path));
  });

  it("does not interfere with the API registered before routing", async () => {
    const response = await request("/api/health", method);

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
    expect(response.headers.get("x-html-fallback")).toBeNull();
    if (method === "HEAD") expect(await response.text()).toBe("");
    else expect(await response.json()).toEqual({ ok: true });
  });
});
