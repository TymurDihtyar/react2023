import {Car} from "./Car";

const Cars = ({cars, setTriger}) => {

    return (
        <div>
            {cars.map(item=> <Car key={item.id} item={item} setTriger={setTriger}/>)}
        </div>
    );
};

export {Cars};