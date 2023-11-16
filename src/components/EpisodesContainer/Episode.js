import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({item}) => {
    const {id, name, episode} = item
    const navigate = useNavigate()


    const handleClick = ()=> {
        const ids = item.characters.map(item=> item.split('/').slice(-1).join()).toString()
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.Episode} onClick={handleClick}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};