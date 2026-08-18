import { Link, NavLink } from "react-router"
import { HamburgerMenu } from "./HamburgerMenu"
import { useArrowKeyNav } from "../hooks/useArrowKeyNav"

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Guía WCAG', href: '/guia' },
    { label: 'Importancia', href: '/importancia' }
]

export function NavBar(){
    const navRef = useArrowKeyNav({ orientation: "horizontal" })

    return (
        <header className="site-header flex items-center justify-between gap-4 bg-blue-800 px-4 py-3 text-white">
            <div className="md:hidden">
                <HamburgerMenu items={navLinks} />
            </div>
            <nav
                ref={navRef}
                aria-label="Navegación principal"
                className="flex flex-1 items-center justify-between gap-4"
            >
                <Link
                    to="/"
                    className="rounded-sm text-lg font-bold text-white focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white"
                    aria-label="Accesibilidad, ir al inicio"
                >
                    Accesibilidad
                </Link>
                <div className="hidden gap-4 md:flex">
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
                </div>
            </nav>
        </header>
    )
}
