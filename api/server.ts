import express from "express";
import serverless from "serverless-http";

const app = express();

// Example endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Add more routes here, same as your old server

// Export a handler for serverless adapters if needed, and the app for direct usage
export const handler = serverless(app);
export default app;
