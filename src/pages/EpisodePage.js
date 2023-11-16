import {Episodes} from "../components/EpisodesContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../redux/slices/episodeSlice";
import {useSearchParams} from "react-router-dom";

const EpisodePage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const dispatch = useDispatch();

    useEffect(() => {
        setQuery({page: '1'})
    }, [dispatch]);

    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes({page}))
    }, [page, dispatch]);

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodePage};