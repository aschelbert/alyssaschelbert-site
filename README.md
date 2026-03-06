# alyssaschelbert.com

Personal portfolio site for Alyssa Schelbert — Product Executive.

## Stack

- Pure HTML/CSS/JS — no build step, no framework, no dependencies
- Hosted on Vercel (free tier)
- Auto-deploys on every push to `main`

## Repo structure

```
/
├── index.html      ← The entire site (self-contained)
├── vercel.json     ← Vercel config (security headers, cache rules)
├── robots.txt      ← SEO
├── sitemap.xml     ← SEO
└── .gitignore
```

## Making changes

1. Edit `index.html` locally (or directly in GitHub's web editor)
2. Commit and push to `main`
3. Vercel auto-deploys within ~30 seconds

## Local preview

```bash
# No install needed — just open in browser
open index.html

# Or serve locally (optional)
npx serve .
```

## Domain setup

Custom domain `alyssaschelbert.com` is configured in Vercel dashboard.
DNS records are managed at your domain registrar (previously Wix).

### DNS records to set at your registrar

| Type  | Name | Value                       |
|-------|------|-----------------------------|
| A     | @    | 76.76.21.21                 |
| CNAME | www  | cname.vercel-dns.com        |

After updating DNS, add both `alyssaschelbert.com` and `www.alyssaschelbert.com`
as custom domains in Vercel → Project Settings → Domains.

Vercel provisions the SSL certificate automatically (free, renews itself).
