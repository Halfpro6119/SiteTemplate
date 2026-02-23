# Local Business Conversion Template

A beautiful, production-ready website template for local businesses built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design with premium UI/UX
- Optimized for local business conversion
- Dark theme with elegant animations
- No database required by default
- Optional Supabase integration for contact form persistence
- Multiple pages: Home, Services, About, Gallery, Reviews, Locations, Contact
- Fully customizable through `src/config.ts`

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Configuration

All business information can be customized in `src/config.ts`. Update the following:

- Business name, type, and tagline
- Contact information (phone, email, WhatsApp)
- Services offered
- Testimonials and reviews
- Service areas
- Gallery images
- Theme colors

## Database (Optional)

This template works without a database by default. Contact form submissions are logged to the browser console.

### To Enable Supabase Database:

1. Create a Supabase project at https://supabase.com
2. Copy `.env.example` to `.env`
3. Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Create a table for contact submissions:
   ```sql
   CREATE TABLE contact_submissions (
     id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
     full_name text NOT NULL,
     phone text NOT NULL,
     email text NOT NULL,
     message text NOT NULL,
     created_at timestamptz DEFAULT now()
   );
   ```

## Customization

### Theme Colors

Update theme colors in `src/config.ts`:

```typescript
theme: {
  primary: '#2563eb',
  primaryHover: '#1d4ed8',
  accent: '#10b981',
  accentHover: '#059669'
}
```

### Business Information

All content is managed through the `businessConfig` object in `src/config.ts`. Simply update the values to match your business.

## Production Deployment

The site is production-ready and can be deployed to any static hosting service:

- **Vercel** — `vercel.json` is included; deploy the `dist` folder or connect the repo for automatic builds.
- **Netlify** — `public/_redirects` is included for SPA routing; deploy `dist` or use build command `npm run build` and publish directory `dist`.
- **GitHub Pages** — Run `npm run build`, then set `base` in `vite.config.ts` to your repo path (e.g. `'/your-repo/'`) and deploy `dist`.
- **AWS S3 / Cloudflare Pages** — Build and upload `dist`; configure the server to serve `index.html` for all routes (SPA fallback).

**SPA fallback:** For client-side routing to work, the host must serve `index.html` for paths like `/services`, `/about`, etc. The included `vercel.json` and `public/_redirects` (Netlify) handle this. For other hosts, add a rewrite rule so all requests return `index.html`.

**Social sharing:** Default Open Graph image is `/flogo.png`. For best results on social networks, use an absolute URL (e.g. `https://yourdomain.com/flogo.png`) by adding a `vite-plugin-html` transform or setting meta tags in your hosting provider.

## License

This template is provided as-is for commercial and personal use.
