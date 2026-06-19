import fs from "fs";
import path from "path";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  content: string;
}

export const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export async function getPosts(): Promise<Omit<Post, "content">[]> {
  const postsDir = POSTS_DIR;

  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(".md", "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const { metadata, excerpt } = parseFrontmatter(raw);
      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || "",
        excerpt: metadata.excerpt || excerpt || "",
        category: metadata.category || undefined,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { metadata, body } = parseFrontmatter(raw);
  const html = markdownToHTML(body);

  return {
    slug,
    title: metadata.title || slug,
    date: metadata.date || "",
    excerpt: metadata.excerpt || "",
    category: metadata.category || undefined,
    content: html,
  };
}

interface Frontmatter {
  title?: string;
  date?: string;
  excerpt?: string;
  category?: string;
}

function parseFrontmatter(raw: string): {
  metadata: Frontmatter;
  body: string;
  excerpt: string;
} {
  const fmMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!fmMatch) {
    return { metadata: {}, body: raw, excerpt: raw.slice(0, 200) };
  }

  const fmText = fmMatch[1];
  const body = fmMatch[2];

  const metadata: Frontmatter = {};
  for (const line of fmText.split("\n")) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      metadata[m[1] as keyof Frontmatter] = m[2].trim();
    }
  }

  const excerpt =
    metadata.excerpt || body.replace(/[#*`>]/g, "").trim().slice(0, 200);

  return { metadata, body, excerpt };
}

function markdownToHTML(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/^---$/gm, "<hr />");

  const parts = html.split("\n\n");
  html = parts
    .map((p) => {
      p = p.trim();
      if (!p) return "";
      if (
        p.startsWith("<h") ||
        p.startsWith("<blockquote") ||
        p.startsWith("<hr")
      ) {
        return p;
      }
      return `<p>${p.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return html;
}
