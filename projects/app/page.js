import styles from './page.module.css'

const projects = [
  {
    slug: 'aiva',
    name: 'aiva',
    desc: 'Self driving car',
    status: 'active',
  },
  {
    slug: 'braily',
    name: 'braily',
    desc: 'braille translation tool',
    status: 'active',
  },
  {
    slug: 'quotly',
    name: 'quotly',
    desc: 'AI powered handbag price quotation tool',
    status: 'active',
  },
]

export default function ProjectsHome() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>projects</h1>
      <p className={styles.sub}>things ive built.</p>
      <div className={styles.grid}>
        {projects.map(p => (
          <a key={p.slug} href={`/${p.slug}`} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardName}>{p.name}</span>
              <span className={styles.status}>{p.status}</span>
            </div>
            <p className={styles.cardDesc}>{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
