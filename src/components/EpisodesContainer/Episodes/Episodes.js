import {useSelector} from "react-redux";

import css from './Episodes.module.css'
import {Episode} from "../Episode";


const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes)

    return (
        <div className={css.all}>
            {episodes.map(item => <Episode key={item.id} item={item}/>)}
        </div>
    );
};

export {Episodes}