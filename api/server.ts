import express from "express";
import serverless from "serverless-http";

const app = express();

// Example endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

// Add more routes here, same as your old server

export const handler = serverless(app);
