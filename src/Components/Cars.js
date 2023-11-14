import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = ({cars}) => {

    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(item=> <Car key={item.id} item={item}/>)}
        </div>
    );
};

export {Cars};