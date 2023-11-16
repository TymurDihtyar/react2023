import {Episodes} from "../components/EpisodesContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../redux/slices/episodeSlice";
import {useSearchParams} from "react-router-dom";

const EpisodePage = () => {
    const {qery, setQery} = useSearchParams('1')
    const pages = qery.get('page')
    const {episodes, prevPage, nextPage} = useSelector(state => state.episodes)
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes({page:pages}))
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