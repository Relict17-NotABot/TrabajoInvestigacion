const API_URL = import.meta.env.VITE_API_URL;
// Nuevo: obtiene las categorías para completar el select.
export async function getCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        if (!response.ok) {
            throw new Error();
        }
        return await response.json();
    } catch {
        throw new Error("Error al obtener categorías");
    }
}
