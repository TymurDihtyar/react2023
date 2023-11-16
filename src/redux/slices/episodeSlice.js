import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services/episodeService";

let initialState = {
    episodes: [],
    episodeName: null,
    prevPage: null,
    nextPage: null,
    isLoading: null,
    errors: null
};

const getAllEpisodes = createAsyncThunk(
    'EpisodeSlice/getAllEpisodes',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const EpisodeSlice = createSlice({
    name: 'EpisodeSlice',
    initialState,
    reducers: {
        setEpisodeName: (state, action) => {
            state.episodeName = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
                state.isLoading = false
                state.errors = null
            })
            .addCase(getAllEpisodes.rejected, (state, action) => {
                state.isLoading = false
                state.errors = action.payload
            })
            .addCase(getAllEpisodes.pending, state => {
                state.isLoading = true
            })
});

const {reducer: episodeReducer, actions} = EpisodeSlice

const episodeActions = {
    ...actions,
    getAllEpisodes
}

export {episodeReducer, episodeActions}