import { NavLink } from "react-router"

const principios = [
    {
        letra: "P",
        titulo: "Perceptible",
        descripcion: "La información y los componentes de la interfaz deben poder percibirse. Texto alternativo en imágenes, subtítulos en video, contraste de color suficiente entre texto y fondo.",
    },
    {
        letra: "O",
        titulo: "Operable",
        descripcion: "Los componentes de la interfaz y la navegación deben poder operarse. Todo lo que funciona con ratón debe funcionar también con teclado, sin límites de tiempo que expulsen al usuario.",
    },
    {
        letra: "C",
        titulo: "Comprensible",
        descripcion: "La información y el manejo de la interfaz deben ser comprensibles. Texto legible, comportamiento predecible entre páginas, ayuda clara cuando el usuario comete un error.",
    },
    {
        letra: "R",
        titulo: "Robusto",
        descripcion: "El contenido debe ser interpretado de forma fiable por una amplia variedad de agentes de usuario, incluidas las tecnologías de asistencia como lectores de pantalla.",
    },
]

export function GuiaPage() {
    return (
        <section aria-labelledby="guia-heading" className="max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 id="guia-heading" className="text-3xl font-bold text-blue-800 mb-4">
                    Guía WCAG: los 4 principios (POUR)
                </h1>
                <div className="w-16 h-1 bg-blue-500 rounded-full" />
            </header>

            <article className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 mb-8 border border-blue-50">
                <p className="text-gray-600 leading-relaxed">
                    Las Pautas de Accesibilidad para el Contenido Web (WCAG) organizan sus criterios de éxito
                    en cuatro principios fundamentales, conocidos por el acrónimo POUR (en inglés). Un sitio
                    que no cumple alguno de estos cuatro principios deja fuera a un grupo de usuarios.
                </p>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {principios.map((p) => (
                    <article
                        key={p.titulo}
                        className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 border border-blue-50 hover:shadow-xl hover:shadow-blue-200/50 transition-shadow duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <span
                                aria-hidden="true"
                                className="flex-shrink-0 w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold"
                            >
                                {p.letra}
                            </span>
                            <div>
                                <h2 className="text-lg font-bold text-blue-800 mb-1">{p.titulo}</h2>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.descripcion}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <NavLink
                to="/guia/checklist"
                className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-6 py-3 font-medium text-white shadow-lg shadow-blue-300/50 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-400/50 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
                Ver checklist aplicado en este sitio
            </NavLink>
        </section>
    )
}
