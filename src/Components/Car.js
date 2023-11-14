import {carsService} from "../services/carsService";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux/slices/carSlice";


const Car = ({item}) => {
    const {id, brand, price, year} = item

    const {triger} = useSelector(state => state.cars)
    const dispatch = useDispatch();

    const del = (id) => {
        carsService.delete(id)
        dispatch(carsActions.setTriger(!triger))
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=> dispatch(carsActions.setOneCar(item))}>update</button>
            <button onClick={() => del(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};