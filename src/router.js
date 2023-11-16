import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayOut} from "./layouts/MainLayOut";
import {EpisodePage} from "./pages";
import {CharactersPage} from "./pages";

const router = createBrowserRouter([
    {path:'', element:<MainLayOut/>, children:[
            {index:true, element:<Navigate to={'episodes'}/>},
            {path:'episodes', element:<EpisodePage/>},
            {path:'characters/:ids', element:<CharactersPage/>}
        ]}
])

export {router}