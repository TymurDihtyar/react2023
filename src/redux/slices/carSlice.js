import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars:[],
    oneCar: null,
    triger: false
}

const carSlice = createSlice({
    name : 'carSlice',
    initialState,
    reducers:{
        setCarsResponse:(state, action) => {
            state.cars = action.payload
        },
        setOneCar: (state, action) => {
            state.oneCar = action.payload
        },
        setTriger: (state, action) => {
            state.triger = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice;

const carsActions = {
    ...actions
}

export {carReducer, carsActions}