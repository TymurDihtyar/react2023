import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layOuts/MainLayOut";
import {CarsConteinerPage} from "./pages/CarsConteinerPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayOut/>, children: [
            {index:true, element:<Navigate to={'cars'}/>},
            {path: 'cars', element: <CarsConteinerPage/>}
        ]
    }
])

export {router}