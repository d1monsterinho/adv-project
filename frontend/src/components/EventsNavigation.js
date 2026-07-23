import classes from './EventsNavigation.module.css';
import {NavLink} from "react-router-dom";

function EventsNavigation() {
    function navLinkClass(isActive) {
        return isActive ? classes.active : undefined;
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="" className={({isActive}) => navLinkClass(isActive)} end>All Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="new" className={({isActive}) => navLinkClass(isActive)}>New Event</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;
