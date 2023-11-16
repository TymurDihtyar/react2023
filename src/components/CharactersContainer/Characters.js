import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";

import css from './Characters.module.css'
import {useNavigate} from "react-router-dom";
import {episodeActions} from "../../redux/slices/episodeSlice";

const Characters = () => {
    const {characters} = useSelector(state => state.character);
    const navigate = useNavigate()
    const dispatch = useDispatch

    const backHandler = () => {
        dispatch(episodeActions.setEpisodeName(null))
        navigate('/episodes')
    }

    return (
        <>
            <button className={css.but} onClick={backHandler}>back</button>
            <div className={css.allCharacters}>
                {characters.map(item => <Character key={item.id} item={item}/>)}
            </div>
        </>
    );
};

export {Characters};