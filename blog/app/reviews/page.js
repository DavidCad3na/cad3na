import styles from './page.module.css'

const reviews = [
  {
    slug: 'ghostty-terminal',
    title: 'Ghostty — a fast terminal worth switching to',
    date: 'Feb 20, 2026',
    tag: 'tools',
    rating: 4,
    excerpt: 'I switched my daily terminal to Ghostty after years on Windows Terminal. Faster rendering, native feel, and a sane config format.',
  },
  {
    slug: 'linear-project-management',
    title: 'Linear for solo developers',
    date: 'Feb 3, 2026',
    tag: 'productivity',
    rating: 5,
    excerpt: 'Linear is built for teams but works remarkably well for tracking personal projects. The keyboard shortcuts alone make it worth it.',
  },
  {
    slug: 'vercel-vs-coolify',
    title: 'Vercel vs. Coolify for self-hosted deploys',
    date: 'Jan 15, 2026',
    tag: 'infrastructure',
    rating: 3,
    excerpt: 'I moved two projects from Vercel to a self-hosted Coolify instance. What I gained in cost, I lost in convenience.',
  },
]

function Stars({ count }) {
  return (
    <span className={styles.stars}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Reviews() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>reviews</h1>
      <p className={styles.sub}>honest takes on tools, software, and gear I actually use.</p>
      <div className={styles.list}>
        {reviews.map((review) => (
          <a key={review.slug} href={`/reviews/${review.slug}`} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.date}>{review.date}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.tag}>{review.tag}</span>
              <span className={styles.dot}>·</span>
              <Stars count={review.rating} />
            </div>
            <div className={styles.cardTitle}>{review.title}</div>
            <div className={styles.excerpt}>{review.excerpt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
