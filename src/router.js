import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {PublickLayOut} from "./layouts/PublickLayOut";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {AuthLayOut} from "./layouts/AuthLayOut";
import {CarsPage} from "./pages/CarsPage";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {
                element: <PublickLayOut/>, children: [
                    {path: 'login', element: <LoginPage/>},
                    {path: 'register', element: <RegisterPage/>}
                ]
            },
            {
                element: <AuthLayOut/>, children: [
                    {path: 'cars', element: <CarsPage/>}
                ]
            }
        ]
    }
]);

export {
    router
}