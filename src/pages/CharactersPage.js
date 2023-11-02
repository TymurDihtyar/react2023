import {useLocation} from "react-router-dom";
import {Characters} from "../Components";

const CharactersPage = () => {
    const {state:{characters}} = useLocation()



    return (
        <div>
            <Characters characters={characters}/>
        </div>
    );
};

export {CharactersPage};