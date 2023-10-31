import {useLoaderData} from "react-router-dom";

import {PostOfCurrentUser} from "../Components/PostContainer/PostOfCurrentUser";
import css from './PostsUserPage.module.css';

const PostsUserPage = () => {
    const {data: posts} = useLoaderData();

    return (
        <div className={css.renderPosts}>
            {posts.map(item => <PostOfCurrentUser key={item.id} item={item}/>)}
        </div>
    );
};

export {PostsUserPage};