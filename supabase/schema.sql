create table if not exists public.projects (
  id text primary key,
  title text not null,
  description text not null,
  tech_stack text[] not null default '{}',
  image_url text not null,
  github_url text,
  live_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.blogs (
  id text primary key,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  tags text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.blogs enable row level security;
alter table public.contacts enable row level security;

create policy "Public can read projects"
on public.projects for select
using (true);

create policy "Public can read blogs"
on public.blogs for select
using (true);

create policy "Authenticated users manage projects"
on public.projects for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users manage blogs"
on public.blogs for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "Authenticated users read contacts"
on public.contacts for select
using (auth.role() = 'authenticated');

create policy "Public can insert contacts"
on public.contacts for insert
with check (true);
