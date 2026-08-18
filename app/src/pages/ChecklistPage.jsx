const items = [
    {
        criterio: "2.4.1 Bypass Blocks",
        detalle: "Enlace \"Saltar al contenido principal\" antes de la navegación, visible al recibir foco.",
    },
    {
        criterio: "3.1.1 Language of Page",
        detalle: "El atributo lang del documento coincide con el idioma real del contenido (es).",
    },
    {
        criterio: "2.4.2 Page Titled",
        detalle: "Cada ruta tiene un <title> único y descriptivo, actualizado al navegar entre páginas.",
    },
    {
        criterio: "1.3.1 Info and Relationships",
        detalle: "Jerarquía de encabezados sin saltos (h1 → h2 → h3) y roles ARIA list/listitem coherentes con la estructura visual.",
    },
    {
        criterio: "1.4.3 Contrast (Minimum)",
        detalle: "Texto normal con relación de contraste mínima de 4.5:1 frente a su fondo.",
    },
    {
        criterio: "2.1.1 Keyboard",
        detalle: "Toda la navegación (menú principal, menú móvil, breadcrumbs) es operable solo con teclado: Tab, flechas, Inicio/Fin y Escape.",
    },
    {
        criterio: "2.4.7 Focus Visible",
        detalle: "El foco de teclado tiene un contorno visible en todos los elementos interactivos.",
    },
    {
        criterio: "1.1.1 Non-text Content",
        detalle: "Imágenes decorativas con alt vacío; imágenes informativas con texto alternativo descriptivo.",
    },
    {
        criterio: "4.1.2 Name, Role, Value",
        detalle: "Componentes con estado (menú desplegable, migas de pan) exponen aria-expanded y aria-current correctamente.",
    },
]

export function ChecklistPage() {
    return (
        <section aria-labelledby="checklist-heading" className="max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 id="checklist-heading" className="text-3xl font-bold text-blue-800 mb-4">
                    Checklist aplicado en este sitio
                </h1>
                <div className="w-16 h-1 bg-blue-500 rounded-full" />
            </header>

            <article className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 mb-8 border border-blue-50">
                <p className="text-gray-600 leading-relaxed">
                    Estos son los criterios de éxito de WCAG 2.2 que verificamos directamente sobre esta
                    aplicación durante la investigación, con la técnica concreta usada para cumplir cada uno.
                </p>
            </article>

            <ul className="flex flex-col gap-3">
                {items.map((item) => (
                    <li
                        key={item.criterio}
                        className="flex gap-3 bg-white rounded-xl shadow-lg shadow-blue-100/50 p-5 border border-blue-50"
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            className="flex-shrink-0 w-6 h-6 mt-0.5 text-blue-700"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.704 5.29a1 1 0 010 1.415l-7.25 7.25a1 1 0 01-1.415 0l-3.25-3.25a1 1 0 111.415-1.415L8.75 11.836l6.543-6.543a1 1 0 011.411 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div>
                            <p className="font-bold text-blue-800">{item.criterio}</p>
                            <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.detalle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
