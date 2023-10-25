import {carsService} from "../services/carsService";

const Car = ({item, setTriger}) => {
    const {id, brand, price, year} = item

    const del = (id) => {
        carsService.delete(id)
        setTriger()
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button>update</button>
            <button onClick={() => del(id)}>delete</button>
        </div>
    );
};

export {Car};