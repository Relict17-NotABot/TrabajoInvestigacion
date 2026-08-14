const API_URL=import.meta.env.VITE_API_URL
export async function getEvents() {
    try {
        const response = await fetch(`${API_URL}/events`)
        if(!response.ok){
            throw new Error()
        }
        return await response.json()
    } catch (error) {
        console.log("Error al obtener eventos: ",error)
        throw new Error("Error al obtener eventos")
    }
}