import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/todos'}>TODOS</NavLink>
            <NavLink to={'/albums'}>ALBUMS</NavLink>
            <NavLink to={'/comments'}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};