import path from "path";
import { createServer } from "./index";
import * as express from "express";

const app = createServer();
const port = process.env.PORT || 3000;

// In production, serve the built SPA files from dist/spa
const __dirname = import.meta.dirname;
const spaPath = path.join(__dirname, "../spa");
const publicPath = path.join(__dirname, "../../public");

// Serve static files from both spa and public directories
app.use(express.static(spaPath));
app.use(express.static(publicPath));

// Handle React Router - serve index.html for all non-API routes
// Dump router.stack before wildcard registration
try {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyAppPre: any = app as any;
  try {
    if (anyAppPre._router && Array.isArray(anyAppPre._router.stack)) {
      // eslint-disable-next-line no-console
      console.log('[DEBUG-PRE-WILDCARD] router.stack:', anyAppPre._router.stack.map((l: any) => ({
        name: l.name,
        regexp: l.regexp ? String(l.regexp) : undefined,
        route: l.route ? l.route.path : undefined,
      })));
    }
  } catch (dumpErr) {
    // eslint-disable-next-line no-console
    console.error('[DEBUG-PRE-WILDCARD] failed to dump router.stack', dumpErr);
  }
  // Use a RegExp for the catch-all route to avoid path-to-regexp parsing issues
  app.get(/.*/, (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }

    res.sendFile(path.join(spaPath, "index.html"));
  });
} catch (err) {
  // Dump router stack for debugging
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyApp: any = app as any;
  try {
    // eslint-disable-next-line no-console
    console.error('[DEBUG-WILDCARD-REG] failed to register wildcard route', err);
    if (anyApp._router && Array.isArray(anyApp._router.stack)) {
      // eslint-disable-next-line no-console
      console.error('[DEBUG-WILDCARD-REG] router.stack dump:', anyApp._router.stack.map((l: any) => ({
        name: l.name,
        regexp: l.regexp ? String(l.regexp) : undefined,
        route: l.route ? l.route.path : undefined,
      })));
    }
  } catch (dumpErr) {
    // eslint-disable-next-line no-console
    console.error('[DEBUG-WILDCARD-REG] failed to dump router stack', dumpErr);
  }
  throw err;
}

app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
