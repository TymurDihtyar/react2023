import {configureStore} from "@reduxjs/toolkit";

import {episodeReducer} from "./slices/episodeSlice";
import {characterReducer} from "./slices/characterSlice";

const store = configureStore({
        reducer: {
            episodes: episodeReducer,
            character: characterReducer        }
})

export {store}