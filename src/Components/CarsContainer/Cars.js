import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data.items))
    }, []);

    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};