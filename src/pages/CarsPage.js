import {CarForm, Cars} from "../Components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../services";
import {carActions} from "../redux/slices/carSlice";

const CarsPage = () => {
    const {triger} = useSelector(state => state.forCar)
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data})=> dispatch(carActions.setCars(data)))
    }, [triger, dispatch]);

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};