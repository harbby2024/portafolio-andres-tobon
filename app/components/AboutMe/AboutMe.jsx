'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  const t = useTranslations('about')
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const cards = [
    'cards.business',
    'cards.ux',
    'cards.learning',
    'cards.adaptability',
    'cards.communication'
  ]

  return (
    <section className={styles.about} id="about">
      {/* SOBRE MI */}
      <div className={styles.header}>
        <h2>{t('title')}</h2>
        <p>{t('description1')}</p>
        <p>{t('description2')}</p>
      </div>

      {/* CÓMO TRABAJO */}
      <div className={styles.work}>
        <h3>{t('workTitle')}</h3>

        <div className={styles.cards}>
          {cards.map((key, index) => (
            <div
              key={key}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {t(key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
