import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

// Blog posts live in content/blog as Markdown files. The file name is the URL:
// content/blog/my-post.md -> /blog/my-post. Files starting with "_" are ignored.
const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

const markdown = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeStringify);

function postFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"));
}

function parse(file: string): (Post & { draft: boolean }) | null {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (!data.title || !data.date) {
    console.warn(`[blog] Skipping ${file}: "title" and "date" are required in the front matter.`);
    return null;
  }
  const words = content.trim().split(/\s+/).length;
  return {
    slug: file.replace(/\.mdx?$/, ""),
    title: String(data.title),
    description: String(data.description ?? ""),
    date: toISODate(data.date),
    updated: data.updated ? toISODate(data.updated) : undefined,
    author: String(data.author ?? "KPU FOOD"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover: data.cover ? String(data.cover) : undefined,
    coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    draft: data.draft === true,
    html: String(markdown.processSync(content)),
  };
}

// gray-matter turns unquoted YAML dates into Date objects; normalise to YYYY-MM-DD.
function toISODate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
}

function isVisible(post: { draft: boolean }) {
  return !post.draft || process.env.NODE_ENV !== "production";
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map(parse)
    .filter((p): p is NonNullable<typeof p> => p !== null && isVisible(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = postFiles().find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;
  const post = parse(file);
  return post && isVisible(post) ? post : null;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
