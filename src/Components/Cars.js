import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = ({cars, refresh}) => {

    return (
        <div>
            <CarForm refresh={refresh} />
            <hr/>
            {cars.map(item=> <Car key={item.id} item={item} refresh={refresh} />)}
        </div>
    );
};

export {Cars};