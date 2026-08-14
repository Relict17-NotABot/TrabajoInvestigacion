import { useEffect, useState } from "react"
import { EventList } from "../components/EventList"
import { getCategories } from "../services/categoryService"
import { getEvents } from "../services/eventService"

export function EventPage() {
    const [events, setEvents] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState("")
    const [categoryId, setCategoryId] = useState("")

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        async function fetchEvents() {
            try {
                setLoading(true)
                const data = await getEvents()
                console.log(data)
                setEvents(data.data)
            } catch (error) {
                console.error("Error al cargar eventos", error)
                setError("Error al cargar eventos")
            } finally {
                setLoading(false)
            }
        }
        fetchEvents()
        async function fetchCategories() {
            try {
                // Nuevo: carga las categorías una sola vez al abrir la página.
                const data = await getCategories()
                setCategories(data.data)
            } catch (error) {
                console.error("Error al cargar categorías", error)
                setError("Error al cargar categorías")
            }
        }
        fetchCategories()
    }, [])

    // Nuevo: combina búsqueda por título y categoría en el frontend.
    const filteredEvents = events.filter((event) => {
        const matchesTitle = event.title
            .toLowerCase()
            .includes(search.toLowerCase())
        const matchesCategory =
            categoryId === "" ||
            event.categoryId === Number(categoryId)
        return matchesTitle && matchesCategory
    })
    if (loading) return <p>Cargando eventos...</p>
    if (error) return <p>{error}</p>
    if (filteredEvents.length === 0) {
        return <p>No hay eventos disponibles</p>
    }

    return (
        <section>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2 style={{ margin: 0 }}>
                    Eventos <span style={{ fontSize: '0.6em', backgroundColor: '#cccc', padding: '2px 8px', borderRadius: '12px', verticalAlign: 'middle' }}>
                        {filteredEvents.length}
                    </span>
                </h2>
            </header>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Buscar evento..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <select
                    value={categoryId}
                    onChange={(event) => setCategoryId(event.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            {filteredEvents.length === 0 ? (
                <p>No hay resultados</p>
            ) : (
                <EventList events={filteredEvents} />
            )}
        </section>
    )
}
