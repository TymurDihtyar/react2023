import css from './Header.module.css'
import {useAppContext} from "../../hooks/useAppContext";

const Header = () => {
    const {episodeName} = useAppContext()

    return (
        <div>
            <div className={css.Header}>{episodeName ? `${episodeName}` : `Rick & Morty`}</div>
        </div>
    );
};

export {Header};