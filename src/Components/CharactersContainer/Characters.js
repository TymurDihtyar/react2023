import {useNavigate} from "react-router-dom";

import {Character} from "./Character";
import {useAppContext} from "../../hooks/useAppContext";
import css from './Characters.module.css'

const Characters = ({characters}) => {
    const navigate = useNavigate()
    const {setEpisodeName} = useAppContext()

    return (
        <>
            <button className={css.but} onClick={() => {
                navigate('/episodes')
                setEpisodeName(null)

            }}>Back</button>
            <div className={css.allCharacters}>
                {characters.map(item => <Character key={item} item={item}/>)}
            </div>
        </>
    );
};

export {Characters};