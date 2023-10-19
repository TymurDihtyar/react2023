import React from 'react';
import {useEffect, useState} from 'react';

import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'
import {launchServises} from "../../axiosServises/launchServises";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchServises.getAll().then(({data}) => setLaunches(data));
    }, []);

    const filterLaunch = launches.filter(item => item.launch_year !== '2020')

    return (
        <div className={css.Launches}>
            {filterLaunch.map(item => <Launch key={item.flight_number} item={item}/>)}
        </div>
    );
};

export {Launches};