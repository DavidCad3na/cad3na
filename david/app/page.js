import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.name}>David</h1>
        <p className={styles.bio}>
          Software developer.
        </p>
        <div className={styles.actions}>
          <a href="/about" className={styles.btnPrimary}>about me</a>
          <a href="/contact" className={styles.btnSecondary}>get in touch</a>
        </div>
      </div>
    </div>
  )
}
