import css from './Header.module.css'
import {useSelector} from "react-redux";
const Header = () => {
    const {episodeName} = useSelector(state => state.episodes)

    return (
        <div className={css.Header}>
            <div>{episodeName ? `${episodeName}` : 'Rick & Morty'}</div>
        </div>
    );
};

export {Header};