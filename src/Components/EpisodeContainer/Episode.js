import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
const Episode = ({item}) => {
    const {id, name, episode, characters} = item;
    const navigate = useNavigate()
    const {setEpisodeName} = useAppContext()

    return (
        <div className={css.Episode} onClick={()=> {
            navigate('/characters', {state:{characters}})
            setEpisodeName(name)
        }}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episode}</div>
        </div>
    );
};

export {Episode};