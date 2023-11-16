import {Character} from "./Character";
import {useSelector} from "react-redux";

const Characters = () => {
    const {characters} = useSelector(state => state.character);

    return (
        <div>
            {characters.map(item => <Character key={item.id} item={item}/>)}
        </div>
    );
};

export {Characters};