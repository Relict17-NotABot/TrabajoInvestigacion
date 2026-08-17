import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import { HomePage } from './pages/HomePage'
import { Example1Page } from './pages/Example1Page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/example1" element={<Example1Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
