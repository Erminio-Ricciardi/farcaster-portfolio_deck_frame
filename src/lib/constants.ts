export const NEXT_PUBLIC_SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://farcaster-portfolio-deck-frame.vercel.app'
    : 'http://localhost:3001';