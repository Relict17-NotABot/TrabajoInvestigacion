import propTypes from "prop-types"
import mariaImg from "../assets/maria.jpg"
import carlosImg from "../assets/carlos.jpg"
import lauraImg from "../assets/laura.jpg"
import pedroImg from "../assets/pedro.jpg"
import anaImg from "../assets/ana.jpg"

const imagenes = {
    "maria.fernandez@citas.com": mariaImg,
    "carlos.mora@citas.com": carlosImg,
    "laura.torres@citas.com": lauraImg,
    "pedro.sanchez@citas.com": pedroImg,
    "ana.rojas@citas.com": anaImg,
}

export function PersonCard({ person }) {
    const imagen = imagenes[person.usuario.correo] || null
    const nombreCompleto = `${person.usuario.nombre} ${person.usuario.primerApellido} ${person.usuario.segundoApellido || ""}`.trim()

    return (
        <article
            aria-label={`Persona: ${nombreCompleto}`}
            className="flex gap-5 p-5 bg-white rounded-xl shadow-lg shadow-blue-100/50 border border-blue-50 hover:shadow-xl hover:shadow-blue-200/50 transition-shadow duration-300"
        >
            {imagen && (
                <img
                    src={imagen}
                    alt={`Foto de ${nombreCompleto}`}
                    className="w-40 h-40 object-cover rounded-full border-4 border-blue-100"
                />
            )}
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-blue-800">{nombreCompleto}</h3>
                <p className="text-sm text-blue-700 font-medium mt-1">{person.especialidad.nombre}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">{person.descripcion}</p>
            </div>
        </article>
    )
}

PersonCard.propTypes = {
    person: propTypes.shape({
        descripcion: propTypes.string,
        usuario: propTypes.shape({
            nombre: propTypes.string.isRequired,
            primerApellido: propTypes.string.isRequired,
            segundoApellido: propTypes.string,
            correo: propTypes.string.isRequired,
        }).isRequired,
        especialidad: propTypes.shape({
            nombre: propTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}
