import {useContext} from "react";
import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context)
    return {
        episodeName: state,
        setEpisodeName: (value) => setState(value)
        // episodeName: state.episodeName,
        // setEpisodeName: (value) => setState(prev => ({...prev, episodeName: value}))
    }
}

export {useAppContext}