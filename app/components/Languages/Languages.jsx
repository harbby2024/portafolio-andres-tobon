'use client'

import styles from './Languages.module.css'

export default function Languages() {
  const languages = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' }
  ]

  return (
    <section className={styles.languages}>
      <div className={styles.container}>
        <h2 className={styles.title}>Lenguajes</h2>
        <div className={styles.list}>
          {languages.map((lang, idx) => (
            <div key={idx} className={styles.langCard}>
              <span className={styles.name}>{lang.name}</span>
              <span className={styles.level}>{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
