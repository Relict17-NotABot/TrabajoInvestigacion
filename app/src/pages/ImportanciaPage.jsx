import { NavLink } from "react-router"

export function ImportanciaPage() {
    return (
        <section aria-labelledby="importancia-heading" className="max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 id="importancia-heading" className="text-3xl font-bold text-blue-800 mb-4">
                    Importancia de la Investigación
                </h1>
                <div className="w-16 h-1 bg-blue-500 rounded-full" />
            </header>

            <article className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-8 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                    Para los desarrolladores es importante porque la navegación funciona como parte del
                    esqueleto de la experiencia. Si el menú llega a ser confuso o el foco desaparece,
                    el resto de la interfaz puede dejar de ser fácil de utilizar.
                </p>
            </article>

            <aside aria-labelledby="beneficios-heading" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <h2 id="beneficios-heading" className="sr-only">Beneficios de la accesibilidad</h2>
                {[
                    "Accesible para personas con discapacidad",
                    "Permite mejorar la experiencia del usuario",
                    "Facilita la navegación en la aplicación",
                    "Contribuye a la accesibilidad del sitio",
                    "Mejora el rendimiento general de la aplicación",
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md shadow-blue-100/40 p-5 border border-blue-100 hover:shadow-lg hover:shadow-blue-200/50 transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    </div>
                ))}
            </aside>

            <NavLink
                to="/importancia/impacto"
                className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-6 py-3 font-medium text-white shadow-lg shadow-blue-300/50 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-400/50 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
                Ver Impacto en Usuarios Reales
            </NavLink>
        </section>
    )
}
