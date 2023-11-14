import {useEffect, useState} from "react";
import {carsService} from "../services/carsService";
import {Cars} from "./Cars";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux/slices/carSlice";

const CarsConteiner = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)

    const [triger, setTriger] = useState(true)
    const refresh = () => setTriger(prev => !prev)

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.setCarsResponse(data)))
    }, [triger]);

    return (
        <div>
            <Cars cars={cars} refresh={refresh}/>
        </div>
    );
};

export {CarsConteiner};