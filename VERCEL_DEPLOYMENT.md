# Vercel Deployment Guide

This project is now configured for deployment on Vercel. Follow these steps to deploy:

## Prerequisites

1. Make sure you have a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI (optional): `npm i -g vercel`

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the configuration and deploy

### Method 2: Vercel CLI

1. Run `npx vercel` in your project directory
2. Follow the prompts to link your project
3. Run `npx vercel --prod` for production deployment

### Method 3: Drag & Drop

1. Run `npm run build` to create the production build
2. Go to [vercel.com](https://vercel.com) dashboard
3. Drag and drop the `dist/spa` folder to deploy

## Configuration

The project includes:

- `vercel.json` - Main configuration file
- API routes in `/api` directory for serverless functions
- Automatic SPA routing for React Router
- Build output in `dist/spa` directory

## Environment Variables

If your project uses environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., `PING_MESSAGE`)

## API Endpoints

After deployment, your API endpoints will be available at:

- `/api/ping` - Simple ping endpoint
- `/api/demo` - Demo endpoint
- `/api/hello` - Hello world endpoint

## Build Commands

- `npm run build` - Build the client for production
- `npm run dev` - Start development server
- `npm run vercel-build` - Vercel-specific build command

## Troubleshooting

1. Make sure all dependencies are in `package.json`
2. Check that build completes successfully locally
3. Verify API functions in `/api` directory follow Vercel function format
4. Check Vercel deployment logs for any errors