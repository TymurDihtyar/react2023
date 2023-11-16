import {Episodes} from "../components/EpisodesContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../redux/slices/episodeSlice";

const EpisodePage = () => {
    const {episodes, prevPage, nextPage} = useSelector(state => state.episodes)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes('3'))
    }, [dispatch]);

    console.log(episodes);
    console.log(prevPage);
    console.log(nextPage);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodePage};