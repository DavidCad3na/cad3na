import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'david | cad3na',
  description: 'portfolio and professional profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <a href="/" className={styles.brand}>david.cad3na.io</a>
        </nav>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
