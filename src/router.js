import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {PostOfCurrentUser} from "./Components/PostContainer/PostOfCurrentUser";
import {PostDetails} from "./Components/PostContainer/PostDetails";
import {CommentsOfPost} from "./Components/CommentsContainer/CommentsOfPost";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => userService.getAll()},
            {
                path: 'users/:id', element: <UserDetailsPage/>, loader:({params:{id}})=> userService.getById(id), children: [
                    {path: 'postOfCurrentUser', element: <PostOfCurrentUser/>}
                ]
            },
            {
                path: 'postDetails', element: <PostDetails/>, children: [
                    {path: 'commentsOfPost', element: <CommentsOfPost/>}
                ]
            }
        ]
    }
])

export {router}