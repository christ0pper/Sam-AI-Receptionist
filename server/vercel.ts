import { createServer } from "./index";
import serverless from "serverless-http";

// Create the Express app
const app = createServer();

// Export a handler compatible with Vercel's Node runtime
// Using CommonJS module.exports so the bundled CJS output maps correctly
// @ts-ignore
module.exports = serverless(app);
