import propTypes from "prop-types"
import { EventCard } from "./EventCard"

export function EventList({events}){
    return (
        <div>
            {events.map((item)=>(
                <EventCard key={item.id} event={item}/>
            ))} 
        </div>
    )
}
EventList.propTypes={
    events:propTypes.array.isRequired
}