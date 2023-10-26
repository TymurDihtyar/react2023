import {Outlet} from "react-router-dom";

import {Header} from "../Components/HeaderContainer/Header";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.Main}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};