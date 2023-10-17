import React from 'react';

import './Person.css';
import {Button} from "../Button/Button";

const Person = ({value}) => {
    const {id,name,status,species,gender,image} = value

    return (
        <div className={'element'}>
            <h2>ID:{id} {name}</h2>
            <img src={image} alt={name}/>
            <p>Status: {status} Gender: {gender} Species: {species}</p>
            <Button props={species}/>
        </div>
    );
};

export {Person};