import { Link, NavLink } from "react-router"
import { HamburgerMenu } from "./HamburgerMenu"

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Ejemplo 1', href: '/example1' },
    { label: 'Importancia', href: '/importancia' }
]

export function NavBar(){
    return (
        <header className="site-header flex items-center justify-between gap-4 bg-blue-800 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
                <div className="md:hidden">
                    <HamburgerMenu items={navLinks} />
                </div>
                <Link
                    to="/"
                    className="rounded-sm text-lg font-bold text-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                    aria-label="Accesibilidad, ir al inicio"
                >
                    Accesibilidad
                </Link>
            </div>
            <nav aria-label="Navegación principal" className="hidden md:flex gap-4">
                {navLinks.map((item) => (
                    <NavLink
                        key={item.href}
                        to={item.href}
                        end
                        className={({ isActive }) => [
                            "flex min-h-11 items-center rounded-md px-3 py-2 text-sm font-medium underline-offset-4 transition-colors",
                            "hover:bg-blue-700 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white",
                            isActive ? "bg-white text-blue-900" : "text-white",
                        ].join(" ")}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}
