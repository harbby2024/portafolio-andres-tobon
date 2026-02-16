'use client'

import Image from 'next/image'
import styles from './TechnicalSkills.module.css'

export default function TechnicalSkills() {
  const cards = [
    {
      title: 'Diseño y UX/UI',
      subtitle: 'Qué hago',
      points: [
        'Material POP',
        'Branding interno y externo',
        'Diseño gráfico digital e impreso',
        'Identidad visual de marca',
        'Diseño UI/UX centrado en el usuario',
      ],
      techTitle: 'Tecnologías',
      techs: [
        { label: 'Illustrator', img: '/Illustrator.png' },
        { label: 'Photoshop', img: '/Photoshop.png' },
        { label: 'Lightroom', img: '/Light-room.png' },
        { label: 'After Effects', img: '/affter effects.png' },
        { label: 'CapCut', img: '/CapCut.png' },
      ],
    },
    {
      title: 'Desarrollo de software',
      subtitle: 'Qué hago',
      points: [
        'Desarrollo Front-end',
        'Integración diseño–código',
        'Interfaces optimizadas en performance y UX',
      ],
      techTitle: 'Tecnologías',
      techs: [
        { label: 'HTML', img: '/HTML.png' },
        { label: 'CSS', img: '/CSS.png' },
        { label: 'JavaScript', img: '/JavaScript.png' },
        { label: 'React', img: '/React.png' },
        { label: 'Next.js', img: '/Next.JS.png' },
        { label: 'Strapi', img: '/Strapi.png' },
        { label: 'MySQL', img: '/MySQL.png' },
      ],
    },
    {
      title: 'Marketing digital',
      subtitle: 'Qué hago',
      points: [
        'Gestión de campañas en Google Ads y Meta Ads',
        'Creación de contenido para redes sociales',
        'Estrategias orientadas a conversión y OKRs de negocio',
      ],
      techTitle: 'Tecnologías',
      techs: [
        { label: 'Meta Ads', img: '/Meta ADS.png' },
        { label: 'Google Ads', img: '/Google ADS.png' },
        { label: 'Google Analytics', img: '/Google Analytics.png' },
      ],
    },
    {
      title: 'Arquitectura y delineación',
      subtitle: 'Qué hago',
      points: [
        'Dibujo técnico y planos arquitectónicos',
        'Modelado y visualización 3D',
      ],
      techTitle: 'Tecnologías',
      techs: [
        { label: 'AutoCAD', img: '/Autocad.png' },
        { label: 'Revit', img: '/Revit.png' },
        { label: 'SketchUp', img: '/Sketchup.png' },
      ],
    },
  ]

  const learningTools = [
    { label: 'Power BI', img: '/Power BI.png' },
    { label: 'Figma', img: '/Figma.png' },
  ]

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Habilidades Técnicas</h2>

      <div className={styles.cards}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{card.title}</h3>
            <span className={styles.subtitle}>{card.subtitle}</span>
            <ul>
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <span className={styles.subtitle}>{card.techTitle}</span>
            <div className={styles.techs}>
              {card.techs.map((tech, i) => (
                <div key={i} className={styles.tech}>
                  <Image src={tech.img} alt={tech.label} width={40} height={40} />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Herramientas en aprendizaje */}
      <div className={styles.learning}>
        <h3>Herramientas en proceso de aprendizaje</h3>
        <div className={styles.techs}>
          {learningTools.map((tool, i) => (
            <div key={i} className={styles.tech}>
              <Image src={tool.img} alt={tool.label} width={40} height={40} />
              <span>{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
