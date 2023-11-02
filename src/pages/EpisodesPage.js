import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../services";
import {Episodes} from "../Components";
// import {useAppContext} from "../hooks/useAppContext";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page:"1"});
    const [prevNext, setPrevNext]= useState({prev:null, next:null});
    // const {setEpisodeName} = useAppContext()

    useEffect(() => {
        episodeService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data.results)
            setPrevNext({prev: data.info.prev, next: data.info.next})
            // setEpisodeName(null)
        })
    }, [query.get('page')]);


    return (
        <div>
            <Episodes episodes={episodes} setQuery={setQuery} prevNext={prevNext}/>
        </div>
    );
};

export {EpisodesPage};