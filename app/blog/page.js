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
    url: "https://blog.didi.bike",
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
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Post grid */}
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/${post.slug}`}
              className={`glass-card ${styles.card} animate-on-scroll delay-${Math.min(i + 1, 5)}`}
            >
              {post.cover ? (
                <img
                  src={fileUrl(post, post.cover)}
                  alt={post.title}
                  className={styles.cardCover}
                  loading="lazy"
                />
              ) : (
                <div className={styles.cardCoverFallback}>
                  <span className={styles.cardCoverIcon}>🚴</span>
                </div>
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.excerpt && (
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                )}
                <div className={styles.cardMeta}>
                  <time>{formatDate(post.publishedAt)}</time>
                  {Array.isArray(post.tags) && post.tags.length > 0 && (
                    <div className={styles.cardTags}>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.cardTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className={styles.empty}>
              <p>No posts yet. Stay tuned.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
