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

This template works without a database by default. Without Supabase, the contact form shows success after a short delay and does not persist submissions.

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

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

Build the project and deploy the `dist` folder.

### Production checklist

- **Build:** Run `npm run build`. If you see `EBUSY` copying `public/logo.png`, close any app that may be using it (e.g. OneDrive sync) and retry, or build from a path outside OneDrive.
- **Env (optional):** To save contact form submissions, set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in your build environment and create the `contact_submissions` table in Supabase.
- **OG/URL:** After deploying, update `index.html` `og:url` (and canonical URL if added) to your live site URL so social shares point to the correct domain.
- **Lint/typecheck:** `npm run lint` and `npm run typecheck` pass before release.

## License

This template is provided as-is for commercial and personal use.
