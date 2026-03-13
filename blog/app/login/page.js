import styles from './page.module.css'

export default function Login() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>sign in</h1>
      <p className={styles.sub}>access your account to manage posts and drafts.</p>
      <form className={styles.form} action="#">
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit" className={styles.submit}>sign in</button>
      </form>
    </div>
  )
}
