import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'blog | cad3na',
  description: 'writing, reviews, and guides by cad3na',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <a href="/" className={styles.brand}>blog.cad3na.io</a>
          <div className={styles.links}>
            <a href="/guides">guides</a>
            <a href="/reviews">reviews</a>
          </div>
        </nav>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
