import styles from './page.module.css'

const guides = [
  {
    slug: 'burp-suite-setup',
    title: 'Setting up Burp Suite for web app testing',
    date: 'Mar 5, 2026',
    tag: 'security',
    excerpt: 'Step-by-step setup for Burp Suite Community — certificates, proxy config, and browser integration.',
  },
  {
    slug: 'wsl2-dev-environment',
    title: 'My WSL2 development environment',
    date: 'Feb 10, 2026',
    tag: 'tools',
    excerpt: 'How I set up WSL2 with Zsh, Neovim, and Docker for a fast, Linux-native dev workflow on Windows.',
  },
  {
    slug: 'git-for-solo-devs',
    title: 'Git workflows for solo developers',
    date: 'Jan 22, 2026',
    tag: 'software',
    excerpt: 'Branch naming, commit hygiene, and the git aliases I rely on when working alone on a project.',
  },
]

export default function Guides() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>guides</h1>
      <p className={styles.sub}>practical how-tos on security tooling, software, and developer workflows.</p>
      <div className={styles.list}>
        {guides.map((guide) => (
          <a key={guide.slug} href={`/guides/${guide.slug}`} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.date}>{guide.date}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.tag}>{guide.tag}</span>
            </div>
            <div className={styles.cardTitle}>{guide.title}</div>
            <div className={styles.excerpt}>{guide.excerpt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
