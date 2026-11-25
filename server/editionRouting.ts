import type { RequestHandler } from "express";
import { resolveEditionRoute } from "../shared/editionRouting";

/** Normalize edition URLs before the existing HTML fallback handles the page. */
export const editionRouting: RequestHandler = (req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    next();
    return;
  }

  const url = new URL(req.originalUrl, "http://localhost");
  const route = resolveEditionRoute(url.pathname);

  if (!route.isEditionPath) {
    next();
    return;
  }

  if (!route.edition) {
    // Keep the application's HTML fallback and metadata, but retain a real 404.
    res.status(404);
    next();
    return;
  }

  if (route.canonicalPath && route.canonicalPath !== url.pathname) {
    res.redirect(301, `${route.canonicalPath}${url.search}`);
    return;
  }

  next();
};
