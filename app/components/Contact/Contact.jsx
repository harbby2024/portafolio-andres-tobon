'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Consulta')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('') // mensaje de estado

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Enviando...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('Correo enviado exitosamente ✅')
        setName('')
        setEmail('')
        setSubject('Consulta')
        setMessage('')
      } else {
        setStatus('Error al enviar correo ❌')
      }
    } catch (error) {
      console.error(error)
      setStatus('Error al enviar correo ❌')
    }
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contáctame</h2>

      <div className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="Consulta">Consulta</option>
            <option value="Proyecto">Proyecto</option>
            <option value="Otro">Otro</option>
          </select>
          <textarea
            placeholder="Tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
          ></textarea>
          <button className={styles.submitButton} type="submit">
            Enviar
          </button>
        </form>

        {status && <p className={styles.status}>{status}</p>}
      </div>

      <div className={styles.emailImage}>
        <span>También puedes escribirme a:</span>
        <Image
          src="/email.png"
          alt="Correo electrónico"
          width={250}
          height={40}
        />
      </div>
    </section>
  )
}
