// app/[locale]/page.jsx
"use client"

import dynamic from 'next/dynamic'
import Navbar from '../components/navbar/Navbar'
import MainPage from '../components/mainPage/MainPage'
import AboutMe from '../components/AboutMe/AboutMe'
import ProfessionalExperience from '../components/ProfessionalExperience/ProfessionalExperience.jsx'
import Studies from '../components//Studies/Studies.jsx'
import Languages from '../components/Languages/Languages.jsx'
import Contact from '../components/Contact/Contact.jsx'


// ⚠️ TechnicalSkills usa hooks, por eso lo cargamos dinámicamente sin SSR
const TechnicalSkills = dynamic(
  () => import('../components/TechnicalSkills/TechnicalSkills'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <MainPage />
      <Navbar />
      <AboutMe />
      <TechnicalSkills />
      <ProfessionalExperience />
      <Studies />
      <Languages />
      <Contact />
      
    </>
  )
}
