import {Outlet} from "react-router-dom";
import {Header} from "../Components/HeaderContainer/Header";

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};