import {Rating} from "@mui/material";

const Car = ({car, refresh}) => {
    const {id, brand, price, year}= car
    const data = 3.1
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <Rating name="customized-10" defaultValue={data} precision={0.1} max={10} />
            <hr/>
        </div>
    );
};

export {Car};