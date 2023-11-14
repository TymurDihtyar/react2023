import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../services/carsService";
import {carsActions} from "../redux/slices/carSlice";

const Car = ({item}) => {
    const {id, brand, price, year} = item

    const dispatch = useDispatch();
    const {triger} = useSelector(state => state.cars)

    const del = (idCar) => {
        carsService.delete(idCar)
        dispatch(carsActions.setTriger(!triger))
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=> dispatch(carsActions.setUpdateCar(item))}>update</button>
            <button onClick={() => del(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};