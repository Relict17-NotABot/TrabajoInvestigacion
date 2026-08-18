import { NavLink } from "react-router";
import heroImage from "../assets/hero.png";

export function HomePage(){
    return(
        <section aria-labelledby="home-heading" className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto py-4">
            <div className="w-full md:w-2/5 flex justify-center">
                <img src={heroImage} alt="" className="max-w-xs w-full" />
            </div>
            <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg shadow-blue-100/50 border border-blue-50 p-6 md:p-8">
                <h1 id="home-heading" className="text-3xl font-bold text-blue-800 mb-3">
                    Accesibilidad web y navegación por teclado
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    Este sitio documenta la auditoría e implementación de WCAG 2.2 realizada sobre una
                    aplicación real: qué criterios se evaluaron, qué fallas se encontraron y cómo se
                    corrigieron, con foco en navegación por teclado, contraste de color y estructura ARIA.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <NavLink
                        to="/guia"
                        className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                        Ver guía WCAG
                    </NavLink>
                    <NavLink
                        to="/importancia"
                        className="inline-flex min-h-11 items-center rounded-lg border border-blue-200 bg-white px-4 py-2 font-medium text-blue-800 hover:bg-blue-50 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                        Por qué importa
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
