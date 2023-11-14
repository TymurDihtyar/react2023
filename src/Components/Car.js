import {carsService} from "../services/carsService";
import {useDispatch} from "react-redux";
import {oneCarAction} from "../redux/slices/oneCarSlice";

const Car = ({item, refresh}) => {
    const {id, brand, price, year} = item
    const dispatch = useDispatch();

    const del = (id) => {
        carsService.delete(id)
        refresh()
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=> dispatch(oneCarAction.setOneCar(item))}>update</button>
            <button onClick={() => del(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};