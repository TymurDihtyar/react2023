import {useDispatch} from "react-redux";

import {carActions} from "../redux/slices/carSlice";
import {carService} from "../services";

const Car = ({item}) => {
    const {id, brand, price, year} = item
    const dispatch = useDispatch()

    const del = async (id) => {
        await carService.delete(id)
        dispatch(carActions.setTriger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setUpdateCar(item))}>update</button>
            <button onClick={()=> del(id)}>delete</button>
        </div>
    );
};

export {Car};