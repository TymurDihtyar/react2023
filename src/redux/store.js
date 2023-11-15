import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carSlice";

const store = configureStore({
    reducer: {
        forCar : carReducer
    }
})

export {store}