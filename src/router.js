import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts/MainLayOut";
import {EpisodePage} from "./pages/EpisodePage";
import {CharactersPage} from "./pages/CharactersPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayOut/>, children:[
            {index:true, element:<Navigate to={'episodes'}/>},
            {path:'episodes', element:<EpisodePage/>},
            {path:'characters', element:<CharactersPage/>}
        ]}
])

export {router}