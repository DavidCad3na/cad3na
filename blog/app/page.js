import styles from './page.module.css'

export default function BlogHome() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>blog</h1>
      <p className={styles.sub}>writing on security, software, and whatever else is on my mind.</p>
      <div className={styles.empty}>
        <span>no posts yet — check back soon.</span>
      </div>
    </div>
  )
}
