import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [reset, setReset] = useState(true);
    const refresh = () => setReset(prev=> !prev)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data.items))
    }, [reset]);

    return (
        <div>
            <CarForm refresh={refresh}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} refresh={refresh}/>)}
        </div>
    );
};

export {Cars};