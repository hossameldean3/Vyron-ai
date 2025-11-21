/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com https://cdn.jsdelivr.net;
  connect-src 'self' https://*.upstash.io https://api.stripe.com https://api.segment.io https://api.cloudflare.com;
  img-src 'self' data: blob: https:;
  style-src 'self' 'unsafe-inline';
  frame-src https://checkout.stripe.com;
`;

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g,' ') },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
];

const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com','cdn.cloudflarestream.com'] },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  }
};
module.exports = nextConfig;
