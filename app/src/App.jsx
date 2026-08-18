import { Outlet, useLocation } from 'react-router'
import { NavBar } from './components/NavBar'
import { BreadCrumbs } from './components/BreadCrumbs'
import { useRef, useEffect } from 'react'

const TITULOS_POR_RUTA = {
  '/': 'Inicio',
  '/guia': 'Guía WCAG: los 4 principios',
  '/guia/checklist': 'Checklist aplicado en este sitio',
  '/importancia': 'Importancia de la Investigación',
  '/importancia/impacto': 'Impacto en Usuarios Reales',
}

const NOMBRE_SITIO = 'Accesibilidad - Trabajo de Investigación'

export default function App() {
  const location = useLocation()
  const mainRef = useRef(null)
  const isFirstRender = useRef(true)

  // En una SPA, anuncia el nuevo contenido moviendo el foco al área principal.
  // Se omite el primer render para no tomar el foco sin una acción del usuario.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    mainRef.current?.focus()
  }, [location.pathname])

  // WCAG 2.4.2 Page Titled: cada ruta necesita un <title> distinto y descriptivo.
  useEffect(() => {
    const titulo = TITULOS_POR_RUTA[location.pathname]
    document.title = titulo ? `${titulo} | ${NOMBRE_SITIO}` : NOMBRE_SITIO
  }, [location.pathname])

  return (
    <div>
      {/* Enlace saltar al contenido principal - WCAG 2.4.1 Bypass Blocks */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Saltar al contenido principal
      </a>
      <NavBar />
      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="w-full p-4 focus:outline-none"
      >
        <BreadCrumbs />
        <Outlet />
      </main>
    </div>
  )
}

