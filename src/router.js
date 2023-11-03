import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayOut, MainLayOut, PublickLayOut} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


let router = createBrowserRouter([
    {
        path: '', element: <MainLayOut/>, children: [
            {index: true, element: <Navigate to={'login'}/>},
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