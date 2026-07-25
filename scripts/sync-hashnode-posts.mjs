import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HASHNODE_USERNAME = "vinayislive";
const HASHNODE_RSS_URL = `https://${HASHNODE_USERNAME}.hashnode.dev/rss.xml`;
const POSTS_LIMIT = 4;

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, "../public/hashnode-posts.json");

const readExistingPosts = async () => {
  try {
    const existing = JSON.parse(await readFile(outputPath, "utf8"));
    return Array.isArray(existing?.posts) ? existing.posts : [];
  } catch {
    return [];
  }
};

const writePosts = async (posts) => {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    `${JSON.stringify({ generatedAt: new Date().toISOString(), posts }, null, 2)}\n`,
  );
};

const decodeXml = (value = "") =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");

const stripHtml = (value = "") =>
  decodeXml(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const readTag = (item, tag) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  const value = match?.[1]?.trim() ?? "";
  const cdata = value.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return decodeXml(cdata ? cdata[1] : value);
};

const syncPosts = async () => {
  const response = await fetch(HASHNODE_RSS_URL, {
    headers: { accept: "application/rss+xml, application/xml, text/xml" },
  });

  if (!response.ok) {
    throw new Error(`Hashnode RSS returned ${response.status}`);
  }

  const rss = await response.text();
  const posts = [...rss.matchAll(/<item>[\s\S]*?<\/item>/gi)]
    .slice(0, POSTS_LIMIT)
    .map(([item]) => ({
      title: readTag(item, "title"),
      link: readTag(item, "link"),
      excerpt: stripHtml(readTag(item, "description")).slice(0, 150),
      publishedAt: readTag(item, "pubDate") || null,
    }));

  await writePosts(posts);
  console.log(`Synced ${posts.length} Hashnode posts.`);
};

try {
  await syncPosts();
} catch (error) {
  const existingPosts = await readExistingPosts();
  await writePosts(existingPosts);
  console.warn(`Hashnode sync skipped: ${error.message}`);
  console.warn(`Kept ${existingPosts.length} existing posts in public/hashnode-posts.json.`);
}
