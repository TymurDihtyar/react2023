import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {episodeActions} from "../../redux/slices/episodeSlice";

const Episode = ({item}) => {
    const {id, name, episode} = item;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = ()=> {
        const ids = item.characters.map(item=> item.split('/').slice(-1).join()).toString()
        dispatch(episodeActions.setEpisodeName(episode))
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