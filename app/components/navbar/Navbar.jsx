'use client'

import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {usePathname, useRouter} from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const t = useTranslations('navbar')
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1]

  const changeLanguage = (locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath)
  }

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/isologo-Andres-Tobon.png"
          alt="Andrés Tobón"
          fill
          priority
        />
      </div>

      {/* Navegación */}
      <nav className={styles.menu}>
        <a href="#about" className={styles.active}>{t('about')}</a>
        <a href="#portfolio">{t('portfolio')}</a>
        <a href="#design">{t('design')}</a>
        <a href="#development">{t('development')}</a>
        <a href="#contact">{t('contact')}</a>
      </nav>

      {/* Idioma */}
      <div className={styles.lang}>
        <button
          onClick={() => changeLanguage('es')}
          className={currentLocale === 'es' ? styles.langActive : ''}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={currentLocale === 'en' ? styles.langActive : ''}
        >
          EN
        </button>
      </div>
    </header>
  )
}
