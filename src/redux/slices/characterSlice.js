import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services";

let initialState = {
    characters: [],
    isLoading: null,
    errors: null
};

const getCharacters = createAsyncThunk(
    'characterSlice/getCharacters',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload
                state.errors = null
                state.isLoading = false
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false
            })
            .addCase(getCharacters.pending, state => {
                state.isLoading = true
            })
})

const {reducer: characterReducer, actions} = characterSlice

const characterActions = {
    ...actions,
    getCharacters
}

export {characterReducer, characterActions}