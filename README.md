# Personal Portfolio

Modern full-stack personal portfolio built with Next.js App Router, Tailwind CSS, Supabase, and Vercel.

## Phase 1: UI

- Responsive home, about, projects, blog, contact, login, and admin pages
- Dark/light theme toggle
- Project and blog detail routes
- Search and tag filtering for blog posts
- SEO metadata and optimized images

## Phase 2: Supabase Integration

- Supabase browser/server clients
- Contact form persistence
- Projects and blogs data services
- Static blog page generation with fallback demo content
- Markdown rendering with sanitization
- Rate-limited contact API

## Phase 3: Admin Dashboard

- Protected `/admin` route
- Email/password login via Supabase Auth
- CRUD APIs for projects and blogs
- Supabase Storage image uploads with file validation

## Phase 4: Deployment

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Create Supabase schema

Run the SQL in [`supabase/schema.sql`](./supabase/schema.sql).

### 4. Create storage bucket

Create a public bucket named `portfolio`.

### 5. Create an admin user

In Supabase Auth, create a user with email/password credentials for dashboard access.

### 6. Run locally

```bash
npm run dev
```

### 7. Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables in the Vercel project settings.
4. Deploy.
5. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the production domain and redeploy.

## Notes

- Without Supabase environment variables, the app falls back to mock content for the public pages.
- Admin actions and uploads require Supabase configuration.
