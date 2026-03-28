import { next } from '@vercel/edge';

const BLOCKED_COUNTRIES = ['RU', 'CN', 'IN'];

export default function middleware(request) {
  const country = request.headers.get('x-vercel-ip-country');

  if (BLOCKED_COUNTRIES.includes(country)) {
    return new Response('Access Denied', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return next();
}

export const config = {
  matcher: '/(.*)',
};
