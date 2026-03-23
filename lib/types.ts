export type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  created_at: string;
  featured?: boolean;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  created_at: string;
  cover_image?: string;
};

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
};
