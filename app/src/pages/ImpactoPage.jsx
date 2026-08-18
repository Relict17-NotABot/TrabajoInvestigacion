import { useEffect, useState } from "react"
import { PersonList } from "../components/PersonList"
import { getEmployees } from "../services/employeeService"

export function ImpactoPage() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchEmployees() {
            try {
                setLoading(true)
                const data = await getEmployees()
                setEmployees(data.data)
            } catch (error) {
                console.error("Error al cargar empleados", error)
                setError("Error al cargar empleados")
            } finally {
                setLoading(false)
            }
        }
        fetchEmployees()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-blue-600 text-lg">Cargando información...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600">{error}</p>
            </div>
        )
    }

    return (
        <section className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Impacto en Usuarios Reales
                </h2>
                <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-4 mb-10">
                <div className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 border border-blue-50">
                    <p className="text-gray-600 leading-relaxed">
                        El impacto recae directamente en usuarios reales. Las personas ciegas o con baja visión
                        pueden depender de tecnologías como lectores de pantalla y de la navegación mediante teclado
                        para utilizar una aplicación.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 border border-blue-50">
                    <p className="text-gray-600 leading-relaxed">
                        También existen personas con discapacidades motoras que pueden tener dificultades para utilizar
                        un ratón y personas con discapacidades cognitivas que pueden necesitar una estructura más
                        predecible, instrucciones claras, navegación consistente y un foco visible.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg shadow-blue-300/50 p-6 text-white">
                    <p className="leading-relaxed font-medium">
                        Las WCAG contemplan necesidades relacionadas con ceguera y baja visión, dificultades de
                        movimiento y algunas limitaciones cognitivas y de aprendizaje, entre otras.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 border border-blue-50">
                    <p className="text-gray-600 leading-relaxed">
                        Sin embargo, la accesibilidad no beneficia únicamente a personas con discapacidades permanentes.
                        También existen situaciones temporales o contextuales. Por ejemplo, una persona puede tener un
                        brazo ocupado, utilizar un dispositivo con una pantalla pequeña, tener problemas con su ratón
                        o necesitar utilizar un nivel alto de zoom.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg shadow-blue-100/50 p-6 border border-blue-50">
                    <p className="text-gray-600 leading-relaxed">
                        Por esta razón, muchas decisiones de accesibilidad terminan ayudando a diferentes tipos de
                        usuarios y situaciones.
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Nuestro Equipo</h3>
                <p className="text-gray-500">
                    Estas son algunas de las personas que se benefician de las prácticas de accesibilidad
                    que implementamos en nuestras aplicaciones:
                </p>
                <div className="w-16 h-1 bg-blue-500 rounded-full mt-4"></div>
            </div>

            <PersonList persons={employees} />
        </section>
    )
}
