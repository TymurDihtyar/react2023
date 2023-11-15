import {createSlice} from "@reduxjs/toolkit";

let initialState={
    cars: [],
    updateCar: null,
    triger: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCars: (state, action) => {
            state.cars = action.payload
        },
        setUpdateCar: (state, action) => {
            state.updateCar = action.payload
        },
        setTriger: state => {
            state.triger = !state.triger
        }
    }
})

const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions
}

export {carReducer, carActions}