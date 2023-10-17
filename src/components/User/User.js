import React from 'react';

import './User.css'

const User  = ({value}) => {
    const {name, surname, age, info, photo} = value
    return (
        <div className = 'member'>
            <h2>{name} {surname} age:{age}</h2>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {User};