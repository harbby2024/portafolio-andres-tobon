'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './ProfessionalExperience.module.css'

export default function ProfessionalExperience() {
  const experiences = [
    {
      logo: '/tania.png',
      position: 'Diseñador gráfico',
      date: '27/06/2018 al 27/12/2018',
      info: [
        'Diseño de piezas gráficas para medios digitales',
        'Apoyo en branding e identidad visual',
        'Creación de contenido para redes sociales',
        'Soporte a estrategias de marketing digital',
        'Creación de material POP'
      ]
    },
    {
      logo: '/grupoExito.png',
      position: 'Diseñador gráfico',
      date: '25/10/2019 al 18/01/2020',
      info: [
        'Desarrollo de piezas gráficas para campañas internas y externas',
        'Adaptación de diseños a diferentes formatos y canales',
        'Trabajo bajo lineamientos de marca y procesos corporativos'
      ]
    },
    {
      logo: '/Contenedores-de-Antioquia.png',
      position: 'Diseñador gráfico y desarrollador',
      date: '17/02/2020 hasta la actualidad',
      info: [
        'Desarrollo de branding y piezas gráficas para medios digitales cliente interno y externo',
        'Diseño UI/UX para proyectos web',
        'Modelado y visualización 3D en SketchUp para proyectos arquitectónicos con contenedores',
        'Elaboración y apoyo en planos arquitectónicos',
        'Gestión de campañas en Google Ads y Meta Ads',
        'Creación de contenido digital para redes sociales',
        'Creación de material POP para cliente interno y externo',
        'Desarrollo front-end con React y Next.js',
        'Integración de diseño visual con código',
        'Implementación de interfaces orientadas a UX',
        'Consumo de APIs y manejo de datos'
      ]
    }
  ]

  const [hovered, setHovered] = useState(null)

  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.cards}>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={styles.card}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === idx ? null : idx)} // móvil: toque para mostrar info
          >
            <div className={`${styles.logoContainer} ${hovered === idx ? styles.hidden : ''}`}>
              <Image src={exp.logo} alt={exp.position} width={200} height={200} className={styles.logo} />
            </div>
            <div className={`${styles.basicInfo} ${hovered === idx ? styles.hidden : ''}`}>
              <h3>{exp.position}</h3>
              <span>{exp.date}</span>
            </div>
            <div className={`${styles.tooltip} ${hovered === idx ? styles.visible : ''}`}>
              <h3>{exp.position}</h3>
              <span>{exp.date}</span>
              <ul>
                {exp.info.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
