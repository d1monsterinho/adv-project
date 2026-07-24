import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

export default function EventsPage() {
    const fetchedEvents = useLoaderData();

    return (
        <EventsList events={fetchedEvents}/>
    );
}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Error occurred during events data fetching.'}), {status: 500});
    } else {
        const resData = await response.json();
        return resData.events;
    }
}