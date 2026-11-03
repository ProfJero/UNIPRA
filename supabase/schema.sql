-- University Practice Senior High School
-- Run in the Supabase SQL editor. The Cloudflare Worker uses the service role.
-- The browser never receives that key. Row level security stays on with no
-- anonymous policies, so the public anon key cannot read or write these tables.

create table if not exists staff_users (
  id text primary key,
  email text unique not null,
  name text not null,
  role text not null check (role in ('super', 'admin', 'editor', 'media', 'viewer')),
  password_hash text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists settings (
  id text primary key,
  phone text not null,
  email text not null,
  address text not null,
  po_box text not null,
  office_hours text not null,
  facebook text not null default '',
  youtube text not null default ''
);

create table if not exists pages (
  id text primary key,
  label text not null,
  body text not null
);

create table if not exists articles (
  id text primary key,
  slug text unique not null,
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  category text not null,
  status text not null check (status in ('draft', 'in_review', 'ready', 'published', 'archived')),
  author_name text not null,
  cover_url text not null default '',
  published_at date,
  updated_at timestamptz not null default now()
);

create table if not exists announcements (
  id text primary key,
  title text not null,
  body text not null,
  active boolean not null default true,
  published_at date not null default current_date
);

create table if not exists events (
  id text primary key,
  title text not null,
  summary text not null,
  starts_on date not null,
  ends_on date,
  place text not null,
  category text not null,
  visible boolean not null default true
);

create table if not exists programmes (
  id text primary key,
  slug text unique not null,
  name text not null,
  summary text not null,
  body text not null,
  subjects text not null default ''
);

create table if not exists leaders (
  id text primary key,
  name text not null,
  role text not null,
  note text not null default ''
);

create table if not exists houses (
  id text primary key,
  name text not null,
  summary text not null
);

create table if not exists milestones (
  id text primary key,
  year text not null,
  title text not null,
  body text not null,
  sort integer not null default 0
);

create table if not exists albums (
  id text primary key,
  slug text unique not null,
  title text not null,
  summary text not null default ''
);

create table if not exists photos (
  id text primary key,
  album_id text not null references albums (id) on delete cascade,
  src text not null,
  alt text not null default '',
  caption text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists enquiries (
  id text primary key,
  name text not null,
  email text not null,
  phone text not null default '',
  audience text not null default '',
  subject text not null default '',
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'archived')),
  created_at timestamptz not null default now()
);

alter table staff_users enable row level security;
alter table settings enable row level security;
alter table pages enable row level security;
alter table articles enable row level security;
alter table announcements enable row level security;
alter table events enable row level security;
alter table programmes enable row level security;
alter table leaders enable row level security;
alter table houses enable row level security;
alter table milestones enable row level security;
alter table albums enable row level security;
alter table photos enable row level security;
alter table enquiries enable row level security;
