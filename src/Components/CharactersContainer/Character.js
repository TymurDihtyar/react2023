import {useEffect, useState} from "react";

import {characterService} from "../../services";
import css from './Character.module.css'

const Character = ({item}) => {
    const [character, setCharacter] = useState();

    useEffect(() => {
        characterService.getOne(item).then(({data}) => setCharacter(data))
    }, []);
    return (
        <div className={css.Character}>
            {character && <div>Id: {character.id}</div>}
            {character && <div>Name: {character.name}</div>}
            {character && <img src={character.image} alt={character.name}/>}
        </div>
    );
};

export {Character};