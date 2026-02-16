'use client'

import Image from 'next/image'
import styles from './Studies.module.css'

export default function Studies() {
  const studies = [
    {
      logo: '/SENA.png',
      career: 'Delineante de Arquitectura',
      type: 'Tecnología',
      date: '15/06/2015'
    },
    {
      logo: '/CESDE.png',
      career: 'Diseñador gráfico',
      type: 'Técnica',
      date: '12/06/2019'
    },
    {
      logo: '/CESDE.png',
      career: 'Desarrollador de software',
      type: 'Técnica',
      date: '17/06/2025'
    }
  ]

  return (
    <section className={styles.studies}>
      <h2 className={styles.title}>Studies</h2>
      <div className={styles.cards}>
        {studies.map((study, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.logoContainer}>
              <Image
                src={study.logo}
                alt={study.career}
                width={200}
                height={200}
                className={styles.logo}
              />
            </div>
            <div className={styles.info}>
              <h3>{study.career}</h3>
              <span>{study.type}</span>
              <span>{study.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
