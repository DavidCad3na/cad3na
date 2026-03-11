import styles from './page.module.css'

const sites = [
  { label: 'blog',     href: 'https://blog.cad3na.io',     desc: 'writing & reviews' },
  { label: 'david',    href: 'https://david.cad3na.io',    desc: 'portfolio & resume' },
  { label: 'projects', href: 'https://projects.cad3na.io', desc: 'things ive built' },
]

const links = [
  { label: 'github',   href: 'https://github.com/DavidCad3na' },
  { label: 'linkedin', href: 'https://linkedin.com/in/davidcad3na' },
  { label: 'ctftime',  href: 'https://ctftime.org/user/252741' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.name}>cad3na</h1>
        <p className={styles.tagline}>Developer, Cybersecurity Enthusiast, System Architect</p>
      </header>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>sites</p>
        <div className={styles.grid}>
          {sites.map(s => (
            <a key={s.label} href={s.href} className={styles.card}>
              <span className={styles.cardLabel}>{s.label}.cad3na.io</span>
              <span className={styles.cardDesc}>{s.desc}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>find me</p>
        <div className={styles.linkRow}>
          {links.map(l => (
            <a key={l.label} href={l.href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
