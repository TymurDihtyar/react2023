import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {episodeActions} from "../redux";
import {useSearchParams} from "react-router-dom";
import {Episodes, Paginatin} from "../components";

const EpisodePage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAllEpisodes({page}))
    }, [page, dispatch]);

    return (
        <div>
            <Episodes/>
            <Paginatin setQuery={setQuery}/>
        </div>
    );
};

export {EpisodePage}
