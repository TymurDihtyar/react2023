import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumPage} from "./pages/AlbumPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'todos', element: <TodosPage/>},
            {path: 'albums', element: <AlbumPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
])

export {router}