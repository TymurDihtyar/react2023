import {carsService} from "../services/carsService";

const Car = ({item, refresh, setCarForUpdate}) => {
    const {id, brand, price, year} = item

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
            <button onClick={()=> setCarForUpdate(item)}>update</button>
            <button onClick={() => del(id)}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};