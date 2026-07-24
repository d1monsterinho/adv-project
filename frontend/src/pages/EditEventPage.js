import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

export default function EditEventPage() {
    const eventDetail = useRouteLoaderData('event-detail').event;

    return (
        <EventForm event={eventDetail}/>
    );
}