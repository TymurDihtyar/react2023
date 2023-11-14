import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carSlice";
import {oneCarReducer} from "./slices/oneCarSlice";

const store = configureStore({
    reducer:{
        cars: carReducer,
        oneCar: oneCarReducer
    }
})

export {store}