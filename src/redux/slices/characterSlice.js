import {createSlice} from "@reduxjs/toolkit";

let initialState={

};

const characterSlice =  createSlice({
    name: 'characterSlice',
    initialState,
    reducers:{

    }
})

const {reducer: characterReducer, actions} = characterSlice

const characterActions = {
    ...actions
}

export {characterReducer, characterActions}