import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'cad3na',
  description: 'cad3na.io',
}

const navLinks = [
  { label: 'blog',     href: 'https://blog.cad3na.io' },
  { label: 'portfolio',    href: 'https://david.cad3na.io' },
  { label: 'projects', href: 'https://projects.cad3na.io' },
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <nav className={styles.nav}>
          <div className={styles.pill}>
            {navLinks.map((l, i) => (
              <span key={l.label} className={styles.navItem}>
                {i > 0 && <span className={styles.sep} />}
                <a href={l.href} className={styles.navLink}>{l.label}</a>
              </span>
            ))}
          </div>
        </nav>
      </body>
    </html>
  )
}
