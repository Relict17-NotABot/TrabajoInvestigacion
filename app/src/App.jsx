import { Outlet } from 'react-router'
import { NavBar } from './components/NavBar'

export default function App() {
  return (
    <div>
      <NavBar />
      <main className = "w-full p-4">
        <Outlet />
      </main>
    </div>
  )
}

