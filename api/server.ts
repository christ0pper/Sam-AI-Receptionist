import { VercelRequest, VercelResponse } from '@vercel/node';
import express from "express";
import cors from "cors";
import { handleDemo } from "../server/routes/demo";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

app.get("/api/demo", handleDemo);

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Export for Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req, res);
}
