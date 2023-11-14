import {createSlice} from "@reduxjs/toolkit";

let initialState={
    oneCar: null
}

const oneCarSlice = createSlice({
    name: 'oneCarSlice',
    initialState,
    reducers:{
        setOneCar: (state, action) => {
            state.oneCar = action.payload
        }
    }
})

const {reducer:oneCarReducer, actions} = oneCarSlice;

const oneCarAction = {
    ...actions
}

export {oneCarReducer, oneCarAction}