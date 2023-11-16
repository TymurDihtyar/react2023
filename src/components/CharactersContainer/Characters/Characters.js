import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './Characters.module.css'
import {Character} from "../Character";
import {episodeActions} from "../../../redux";

const Characters = () => {
    const {characters} = useSelector(state => state.character);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const back = () => {
        dispatch(episodeActions.setEpisodeName(null));
        navigate(-1);
    }

    return (
        <>
            <button className={css.but} onClick={back}>back</button>
            <div className={css.allCharacters}>
                {characters.map(item => <Character key={item.id} item={item}/>)}
            </div>
        </>
    );
};

export {Characters};