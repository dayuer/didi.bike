/**
 * PocketBase API Client — didi.bike blog data layer
 *
 * Server-side rendering connects to PocketBase internal address,
 * client-side accesses via Nginx reverse proxy /api/.
 */

const PB_URL =
  process.env.POCKETBASE_URL || "http://127.0.0.1:8090";

/**
 * Generic fetch wrapper with error handling and cache control
 */
async function pbFetch(path, options = {}) {
  const url = `${PB_URL}${path}`;
  const res = await fetch(url, {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
    ...options,
  });

  if (!res.ok) {
    throw new Error(`PocketBase ${res.status}: ${url}`);
  }

  return res.json();
}

/**
 * Fetch published blog post list
 * @param {number} page - Page number
 * @param {number} perPage - Items per page
 * @param {string} [tag] - Optional tag filter
 */
export async function fetchPosts(page = 1, perPage = 20, tag) {
  let filter = "published=true";
  if (tag) {
    filter += ` && tags ~ "${tag}"`;
  }

  const data = await pbFetch(
    `/api/collections/posts/records?` +
      new URLSearchParams({
        page: String(page),
        perPage: String(perPage),
        sort: "-publishedAt",
        filter,
        fields: "id,title,slug,excerpt,cover,tags,publishedAt,created",
      })
  );

  return {
    items: data.items || [],
    totalPages: data.totalPages || 0,
    totalItems: data.totalItems || 0,
    page: data.page || 1,
  };
}

/**
 * Fetch a single post by slug
 */
export async function fetchPost(slug) {
  const data = await pbFetch(
    `/api/collections/posts/records?` +
      new URLSearchParams({
        filter: `slug="${slug}" && published=true`,
        perPage: "1",
      })
  );

  const items = data.items || [];
  return items.length > 0 ? items[0] : null;
}

/**
 * Fetch all tags (aggregated from published posts)
 */
export async function fetchTags() {
  const data = await pbFetch(
    `/api/collections/posts/records?` +
      new URLSearchParams({
        filter: "published=true",
        fields: "tags",
        perPage: "200",
      })
  );

  const tagSet = new Set();
  for (const item of data.items || []) {
    const tags = item.tags;
    if (Array.isArray(tags)) {
      tags.forEach((t) => tagSet.add(t));
    }
  }

  return [...tagSet].sort();
}

/**
 * Build PocketBase file URL
 */
export function fileUrl(record, filename) {
  if (!filename) return null;
  return `${PB_URL}/api/files/${record.collectionId || "posts"}/${record.id}/${filename}`;
}
