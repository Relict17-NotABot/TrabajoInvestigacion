import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import { HomePage } from './pages/HomePage'
import { Example1Page } from './pages/Example1Page'
import { ImportanciaPage } from './pages/ImportanciaPage'
import { ImpactoPage } from './pages/ImpactoPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/example1" element={<Example1Page />} />
          <Route path="/importancia" element={<ImportanciaPage />} />
          <Route path="/importancia/impacto" element={<ImpactoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
