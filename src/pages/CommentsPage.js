import {Outlet} from "react-router-dom";

import {Comments} from "../Components/CommentsContainer/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};