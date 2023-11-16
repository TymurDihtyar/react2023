import {Episode} from "./Episode";
import {useSelector} from "react-redux";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes)


    return (
        <div>
            {episodes.map(item => <Episode key={item.id} item={item}/>)}
        </div>
    );
};

export {Episodes};