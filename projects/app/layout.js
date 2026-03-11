import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'projects | cad3na',
  description: 'things built by cad3na',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <a href="/" className={styles.brand}>projects.cad3na.io</a>
        </nav>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
