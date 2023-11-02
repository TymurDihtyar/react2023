import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
const Episode = ({item}) => {
    const {id, name, chapter} = item;
    const navigate = useNavigate()

    return (
        <div className={css.Episode} onClick={()=> navigate('/characters')}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};