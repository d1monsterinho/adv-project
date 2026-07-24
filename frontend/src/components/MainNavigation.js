import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    function linkClasses(isActive) {
        return isActive ? classes.active : undefined;
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="home" className={({isActive}) => linkClasses(isActive)} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="events" className={({isActive}) => linkClasses(isActive)}>Events</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
