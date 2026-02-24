import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPost, fetchPosts, fileUrl } from "@/lib/pocketbase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./article.module.css";

/**
 * Dynamic metadata
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || `${post.title} — DIDI.BIKE Blog`,
    openGraph: {
      title: `${post.title} | DIDI.BIKE Blog`,
      description: post.excerpt || post.title,
      url: `https://didi.bike/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className={styles.articlePage}>
          <div className={styles.articleContainer}>
            <div className={styles.notFound}>
              <h1>Post Not Found</h1>
              <p>The article you are looking for does not exist.</p>
              <Link href="/blog" className="btn btn-secondary">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const coverUrl = post.cover ? fileUrl(post, post.cover) : null;

  return (
    <>
      <Navbar />
      <article className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Back link */}
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

          {/* Article header */}
          <header className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <time>{formatDate(post.publishedAt)}</time>
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Cover */}
          {coverUrl && (
            <img
              src={coverUrl}
              alt={post.title}
              className={styles.cover}
            />
          )}

          {/* Content */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      <Footer />
    </>
  );
}
