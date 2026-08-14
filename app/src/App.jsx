import './App.css'
import { EventPage } from './pages/EventsPage'
import { HomePage } from './pages/HomePage'

export default function App() {
  return (
    <div>
      <header> 
        <h1>Sistema de eventos</h1>
      </header>
      <main>
        <HomePage />
        <EventPage />
      </main>
    </div>
  )
}

