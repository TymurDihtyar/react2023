import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {carService} from "../../services";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [reset, setReset] = useState(true);
    const refresh = () => setReset(prev => !prev);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev:null, next:null});

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data}) => {
            setCars(data.items)
            setPrevNext({prev:data.prev, next: data.next})
        })
    }, [reset, query.get('page')]);

    function prevCars() {
        setQuery(prev=> {
            prev.set('page', `${+prev.get('page')-1}`)
        })
    }

    function nextCars() {
        setQuery(prev=> {
            prev.set('page', `${+prev.get('page')+1}`)
        })
    }

    return (
        <div>
            <CarForm refresh={refresh}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} refresh={refresh}/>)}
            <div>
                <button disabled={!prevNext.prev} onClick={prevCars}>prev</button>
                <button disabled={!prevNext.next} onClick={nextCars}>next</button>
            </div>
        </div>
    );
};

export {Cars};