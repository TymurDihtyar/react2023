import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars:[]
}

const carSlice = createSlice({
    name : 'carSlice',
    initialState,
    reducers:{
        setCarsResponse:(state, action) => {
            state.cars = action.payload
        }
    }
})

const {reducer:carReducer, actions} = carSlice;

const carsActions = {
    ...actions
}

export {carReducer, carsActions}