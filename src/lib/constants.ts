export const NEXT_PUBLIC_SITE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://herminius.eth.limo'
    : 'http://localhost:3001';