import {useEffect, useState} from "react";
import {carsService} from "../services/carsService";
import {Cars} from "./Cars";

const CarsConteiner = () => {
    const [cars, setCars] = useState([])
    const [triger, setTriger] = useState(true)
    // const refresh = setTriger(prev != prev)

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [triger]);

    return (
        <div>
            <Cars cars={cars} setTriger={setTriger}/>
        </div>
    );
};

export {CarsConteiner};