import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UIEffects from './components/UIEffects'
import Loading from './components/Loading'
import './components/Loading.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      {/* Pantalla de carga */}
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}
      
      {/* Contenido principal - solo se muestra cuando termina la carga */}
      {!isLoading && (
        <>
          {/* Efectos de UI (cursor, barra de progreso, etc.) */}
          <UIEffects />
          
          {/* Navegación */}
          <Navigation />
          
          {/* Sección Hero con fondo de aurora */}
          <Hero />
          
          {/* Resto de secciones */}
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
