import { NavLink } from "react-router"

export function ImportanciaPage() {
    return (
        <section className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Importancia de la Investigación
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-8 mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                    Para los desarrolladores es importante porque la navegación funciona como parte del
                    esqueleto de la experiencia. Si el menú llega a ser confuso o el foco desaparece,
                    el resto de la interfaz puede dejar de ser fácil de utilizar.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
            </div>

            <NavLink to="/importancia/impacto">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-300/50 hover:shadow-xl hover:shadow-blue-400/50 transition-all duration-300 cursor-pointer">
                    Ver Impacto en Usuarios Reales
                </button>
            </NavLink>
        </section>
    )
}
