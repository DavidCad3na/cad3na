'use client'
import { useRef } from 'react'
import styles from './page.module.css'

// ── Status ──────────────────────────────────────────
// Pick one label + color, comment out the rest:
//   'open to work'   #4ade80   (green)
//   'building'       #E84C22   (orange — matches accent)
//   'freelancing'    #a78bfa   (purple)
//   'studying'       #60a5fa   (blue)
//   'unavailable'    #ef4444   (red)
const status = { label: 'Available', color: '#4ade80' }

const links = [
  { label: 'github',   href: 'https://github.com/DavidCad3na' },
  { label: 'linkedin', href: 'https://linkedin.com/in/davidcad3na' },
  { label: 'ctftime',  href: 'https://ctftime.org/user/252741' },
]

export default function Home() {
  const heroRef = useRef(null)

  function handleMouseMove(e) {
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    heroRef.current.style.setProperty('--mx', `${x}%`)
    heroRef.current.style.setProperty('--my', `${y}%`)
  }

  function handleMouseLeave() {
    heroRef.current.style.setProperty('--mx', `-9999px`)
    heroRef.current.style.setProperty('--my', `-9999px`)
  }

  return (
    <main>
      <section
        ref={heroRef}
        className={styles.hero}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Left: identity ── */}
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>cad3na.io</p>
          <h1 className={styles.heroTitle}>cad3na</h1>
          <p className={styles.heroSub}>
           [ dev | infosec | infrastructure ]
          </p>
          <span className={styles.status} style={{ '--status-color': status.color }}>
            <span className={styles.statusDot} />
            {status.label}
          </span>
        </div>

        {/* ── Right: find me ── */}
        <div className={styles.findMe}>
          <p className={styles.findMeLabel}>find me</p>
          <ul className={styles.linkList}>
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className={styles.linkItem} target="_blank" rel="noopener noreferrer">
                  <span>{l.label}</span>
                  <span className={styles.arrow}>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
