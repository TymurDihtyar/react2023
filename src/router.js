import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {CommentsOfPost} from "./Components/CommentsContainer/CommentsOfPost";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsUserPage} from "./pages/PostsUserPage";
import {postService} from "./services/postService";
import {PostDetailPage} from "./pages/PostDetailPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => userService.getAll()},
            {
                path: 'users/:id', element: <UserDetailsPage/>, loader:({params:{id}})=> userService.getById(id), children: [
                    {path: 'posts', element: <PostsUserPage/>, loader: ({params:{id}})=> postService.getByUserId(id)}
                ]
            },
            {
                path: 'posts/:id', element: <PostDetailPage/>, loader:({params:{id}})=> postService.getById(id), children: [
                    {path: 'commentsOfPost', element: <CommentsOfPost/>}
                ]
            }
        ]
    }
])

export {router}