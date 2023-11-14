import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Cars} from "./Cars";
import {carsService} from "../services/carsService";
import {carsActions} from "../redux/slices/carSlice";

const CarsConteiner = () => {
    const dispatch = useDispatch()
    const {cars, triger} = useSelector(state => state.cars)

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.setCarsResponse(data)))
    }, [triger]);

    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsConteiner};