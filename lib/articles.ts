import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category?: string;
  date?: string;
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "artikler");

function loadArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const isProduction = process.env.NODE_ENV === "production";
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"));

  const loaded: Article[] = [];
  for (const file of files) {
    const slug = file.slice(0, -".md".length);
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf8");
    const { data, content } = matter(raw);

    if (isProduction && data.utkast === true) continue;

    loaded.push({
      slug,
      title: data.tittel ?? "",
      summary: data.ingress ?? "",
      content: content.trim(),
      category: data.kategori || undefined,
      date: data.dato || undefined,
    });
  }
  return loaded;
}

export const articles: Article[] = loadArticles();

export function sortedByDateDesc(list: Article[]): Article[] {
  return [...list].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}

export function formatArticleDate(date?: string): string | null {
  if (!date) return null;
  return new Date(date).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function stripMarkdownSyntax(markdown: string): string {
  return markdown
    // links: [text](url) -> text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    // headings: leading #'s
    .replace(/^#{1,6}\s+/gm, "")
    // blockquote markers
    .replace(/^>\s?/gm, "")
    // list markers (-, *, + or "1.") at line start
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, "")
    // bold / italic markers
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2");
}

export function countWords(content: string): number {
  return stripMarkdownSyntax(content).trim().split(/\s+/).filter(Boolean).length;
}

export function calculateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(countWords(content) / 220));
}
