import React from 'react';

import {Person} from "../Person/Person";
import {useEffect, useState} from "react";
import './Persons.css';

const Persons = () => {
   const [items, setItems] = useState([])
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
            .then(value => value.json())
            .then(items => setItems(items))
    },[]);

    return (
        <div className={'all'}>
            {items.map(item => <Person key={item.id} value={item}/>)}
        </div>
    );
};

export {Persons};
