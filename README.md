# VYRON — Enterprise Starter (Next.js)

This repository contains a production-ready Next.js starter tailored to VYRON: HLS video player, serverless API endpoints, Upstash queue worker example, Stripe stub, Sentry, Tailwind, and CI.

## Quick start
1. Copy `.env.example` → `.env.local` and fill env vars (optional for MVP).
2. Install:
   ```
   npm ci
   ```
3. Run dev:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Deploy
- Recommended: Vercel (connect GitHub repo → Deploy).
- Put large assets/video on Cloudflare Stream or S3/R2 and use HLS (.m3u8) for adaptive streaming.
