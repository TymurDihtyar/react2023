import {useState} from "react";

import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = ({cars, refresh}) => {
    const [carForUpdate, setCarForUpdate] = useState(null)

    return (
        <div>
            <CarForm refresh={refresh} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(item=> <Car key={item.id} item={item} refresh={refresh} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};