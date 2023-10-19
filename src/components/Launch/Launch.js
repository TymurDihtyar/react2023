import React from 'react';

import css from './Launch.module.css'

const Launch = ({item}) => {
    const {mission_name, launch_year, links}= item;
    const {mission_patch_small} = links;
    return (
        <div className={css.Launch}>
            <h3>Mission: <br/>{mission_name}</h3>
            <p>Launch: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};