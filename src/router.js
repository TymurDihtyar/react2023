import {createBrowserRouter} from "react-router-dom";

import {MainLayOut} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <EpisodesPage/>},
            {path:'episodes', element: <EpisodesPage/>},
            {path:'characters', element: <CharactersPage/>}
        ]
    }
])

export {router}