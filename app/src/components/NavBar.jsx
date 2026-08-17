import { Link } from "react-router"
import { HamburgerMenu } from "./HamburgerMenu"

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Ejemplo 1', href: '/example1' }
]

export function NavBar(){
    return (
        <header className="flex items-center justify-between p-4 py-3 bg-blue-400 text-white">
            <div className="flex items-center gap-2">
                <div>
                    <HamburgerMenu items={navLinks} />
                </div>
                <h1 className="text-zinc-100 font-bold">Accesibilidad</h1>
            </div>
            <nav>
                {navLinks.map((item, index) => (
                    <Link
                        key={index}
                        to={item.href}
                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}