import React from 'react';
import axios from "axios";
import {useEffect, useState} from 'react';

import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data}) => setLaunches(data));
    }, []);

    const filterLaunch = launches.filter(item => item.launch_year !== '2020')

    return (
        <div className={css.Launches}>
            {filterLaunch.map(item => <Launch key={item.id} item={item}/>)}
        </div>
    );
};

export {Launches};