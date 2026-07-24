import {redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    const eventDetails = useRouteLoaderData('event-detail').event;

    return (
        <EventItem event={eventDetails}/>
    );
}

export async function loader({request, params}) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Error occurred during fetching details for event.'}), {status: 500});
    }

    return response;
}

export async function action({request, params}) {
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
        method: request.method,
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({message: 'Error occurred during event deletion.'}), {status: 500});
    }

    return redirect('/events');
}