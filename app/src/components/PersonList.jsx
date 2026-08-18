import propTypes from "prop-types"
import { PersonCard } from "./PersonCard"

export function PersonList({ persons }) {
    return (
        <div role="list" className="flex flex-col gap-4">
            {persons.map((item) => (
                <PersonCard key={item.id} person={item} />
            ))}
        </div>
    )
}

PersonList.propTypes = {
    persons: propTypes.array.isRequired,
}
