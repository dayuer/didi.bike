import Link from "next/link";
import { fetchPosts, fetchTags, fileUrl } from "@/lib/pocketbase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description:
    "DIDI.BIKE tech blog — cycling sensor technology, aerodynamics research, and performance analytics.",
  openGraph: {
    title: "Blog | DIDI.BIKE",
    description: "Cycling technology insights, sensor innovation, and performance analytics.",
    url: "https://didi.bike/blog",
  },
};

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const { items: posts } = await fetchPosts(1, 50);
  const tags = await fetchTags();

  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <div className={styles.blogPage}>
        <div className="container">
          {/* Header */}
          <header className={`${styles.header} animate-on-scroll`}>
            <h1 className={styles.title}>Blog</h1>
            <p className={styles.subtitle}>
              Cycling technology insights, sensor innovation, and performance
              analytics.
            </p>
          </header>

          {/* Tag bar */}
          {tags.length > 0 && (
            <div className={`${styles.tagBar} animate-on-scroll delay-1`}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tagBtn}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Post list (classic) */}
          <div className={styles.postList}>
            {posts.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`${styles.postEntry} animate-on-scroll delay-${Math.min(i + 1, 5)}`}
              >
                <div className={styles.postMeta}>
                  <time className={styles.postDate}>
                    {formatDate(post.publishedAt)}
                  </time>
                  {Array.isArray(post.tags) && post.tags.length > 0 && (
                    <>
                      <span className={styles.postDot} />
                      <span className={styles.postTag}>
                        {post.tags[0]}
                      </span>
                    </>
                  )}
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                {post.excerpt && (
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                )}
              </Link>
            ))}

            {posts.length === 0 && (
              <div className={styles.empty}>
                <p>No posts yet. Stay tuned.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
