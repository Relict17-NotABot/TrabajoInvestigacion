const API_URL = import.meta.env.VITE_API_URL

export async function getEmployees() {
    try {
        const response = await fetch(`${API_URL}/empleados/activos`)
        if (!response.ok) {
            throw new Error()
        }
        return await response.json()
    } catch (error) {
        console.log("Error al obtener empleados: ", error)
        throw new Error("Error al obtener empleados")
    }
}
