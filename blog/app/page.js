import styles from './page.module.css'

const posts = [
  {
    slug: 'understanding-cors',
    title: 'Understanding CORS and why it matters',
    date: 'Mar 10, 2026',
    tag: 'security',
    excerpt: 'A practical breakdown of Cross-Origin Resource Sharing — what it protects against, how browsers enforce it, and where developers commonly go wrong.',
  },
  {
    slug: 'next-app-router',
    title: 'Moving to the Next.js App Router',
    date: 'Feb 28, 2026',
    tag: 'software',
    excerpt: 'My experience migrating a production Next.js project from the Pages Router to the App Router. What changed, what broke, and what I wish I had known.',
  },
  {
    slug: 'ssh-hardening',
    title: 'Hardening SSH on a new VPS',
    date: 'Feb 14, 2026',
    tag: 'security',
    excerpt: 'The minimal set of SSH config changes I make on every new server — key-only auth, port knocking, and fail2ban basics.',
  },
]

export default function BlogHome() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>blog</h1>
      <p className={styles.sub}>writing on security, software, and whatever else is on my mind.</p>
      <div className={styles.list}>
        {posts.map((post) => (
          <a key={post.slug} href={`/${post.slug}`} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.tag}>{post.tag}</span>
            </div>
            <div className={styles.cardTitle}>{post.title}</div>
            <div className={styles.excerpt}>{post.excerpt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
