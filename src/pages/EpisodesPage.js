import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../services/episodeService";
import {Episodes} from "../Components/EpisodeContainer";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page:"1"});
    const [prevNext, setPrevNext]= useState({prev:null, next:null});

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [query.get('page')]);


    return (
        <div>
            <Episodes episodes={episodes} setQuery={setQuery} prevNext={prevNext}/>
        </div>
    );
};

export {EpisodesPage};