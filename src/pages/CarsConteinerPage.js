import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Cars} from "../Components/Cars";
import {carsService} from "../services/carsService";
import {carsActions} from "../redux/slices/carSlice";

const CarsConteinerPage = () => {
    const dispatch = useDispatch()
    const {cars, triger} = useSelector(state => state.cars)

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.setCarsResponse(data)))
    }, [triger, dispatch]);

    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export {CarsConteinerPage};