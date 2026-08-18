import propTypes from "prop-types"
import { PersonCard } from "./PersonCard"

export function PersonList({ persons }) {
    return (
        <div role="list" className="flex flex-col gap-4">
            {persons.map((item) => (
                <div role="listitem" key={item.id}>
                    <PersonCard person={item} />
                </div>
            ))}
        </div>
    )
}

PersonList.propTypes = {
    persons: propTypes.array.isRequired,
}
