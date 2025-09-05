Vercel deployment notes

This project builds a client SPA into `dist/spa` and a bundled Node ESM server into `dist/server/node-build.mjs`.

Why this setup works with Vercel

- `vercel.json` routes all requests to the built server at `dist/server/node-build.mjs` which is created by the `build` script.
- The `build` script runs `vite build` for the SPA and `esbuild server/node-build.ts` to bundle the server.

Deploying

1. Push your branch to GitHub/GitLab/Bitbucket and connect the repository in the Vercel dashboard.
2. In Vercel project settings set the build command to:

   npm run build

   and the output directory can be left empty because `vercel.json` uses the built server in `dist/`.

3. Environment variables: set any required env vars (e.g., PING_MESSAGE) in the Vercel dashboard under Project > Settings > Environment Variables.

Alternative: Use Vercel CLI

- Install: npm i -g vercel
- From project root: vercel --prod

Notes

- Local build verified: `dist/spa` and `dist/server/node-build.mjs` were produced.
- If you change the server entry file path, update `vercel.json` accordingly.
