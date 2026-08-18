import { Outlet } from 'react-router'
import { NavBar } from './components/NavBar'
import { BreadCrumbs } from './components/BreadCrumbs'

export default function App() {
  return (
    <div>
      <NavBar />
      <main className = "w-full p-4">
        <BreadCrumbs />
        <Outlet />
      </main>
    </div>
  )
}

