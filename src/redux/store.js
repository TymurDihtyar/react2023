import {configureStore} from "@reduxjs/toolkit";

import {episodeReducer, characterReducer} from "./slices";

const store = configureStore({
        reducer: {
            episodes: episodeReducer,
            character: characterReducer        }
})

export {store}