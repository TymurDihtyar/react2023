import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {Users} from "./Components/UsersContainer/Users";
import {UserDetails} from "./Components/UsersContainer/UserDetails";
import {PostOfCurrentUser} from "./Components/PostContainer/PostOfCurrentUser";
import {PostDetails} from "./Components/PostContainer/PostDetails";
import {CommentsOfPost} from "./Components/CommentsContainer/CommentsOfPost";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <Users/>},
            {
                path: 'userDetail', element: <UserDetails/>, children: [
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