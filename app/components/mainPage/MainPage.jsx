'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './MainPage.module.css'

export default function MainPage() {
  const t = useTranslations('hero')

  return (
    <main className={styles.hero}>
      {/* Luz roja animada */}
      <div className={styles.redGlow} />

      <section className={styles.content}>
        {/* Texto */}
        <div className={styles.text}>
          <h1>
            {t('title').split(' y ').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h1>

          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/Logotipo-Andres-Tobon.png"
                alt="Logotipo Andrés Tobón"
                fill
                priority
              />
            </div>
          </div>
        </div>

        {/* Imagen principal */}
        <div className={styles.image}>
          <Image
            src="/Andres-Felipe-Tobon-Arenas.png"
            alt="Andrés Tobón"
            fill
            priority
          />
        </div>
      </section>
    </main>
  )
}
