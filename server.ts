import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT) || 3000;

// Markadeo is a static multi-page React SPA — no backend APIs.
// Contact happens via WhatsApp / email links on the client.

// Configure Vite middleware (dev) or static file serving (prod),
// with an SPA fallback so client routes (e.g. /services) deep-link.
async function bootstrapServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Markadeo] Server running on http://localhost:${PORT}`);
  });
}

bootstrapServer();
