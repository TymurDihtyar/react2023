import {useEffect, useState} from "react";

import {albumsService} from "../../services/albumsService";
import {Album} from "./Album";
import css from './Albums.module.css'

const Albums = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbum(data))
    }, []);
    return (
        <div className={css.albums}>
            {album.map(item => <Album key={item.id} item={item}/>)}
        </div>
    );
};

export {Albums};