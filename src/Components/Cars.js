import {useSelector} from "react-redux";
import {Car} from "./Car";

const Cars = () => {
    const {cars} = useSelector(state => state.forCar)
    return (
        <div>
            {cars.map(item=> <Car key={item.id} item={item}/>)}
        </div>
    );
};

export {Cars};