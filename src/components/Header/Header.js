import {useSelector} from "react-redux";

import css from './Header.module.css';
const Header = () => {
    const {episodeName} = useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            <div>{episodeName ? `${episodeName}` : 'Rick & Morty'}</div>
        </div>
    );
};

export {Header};