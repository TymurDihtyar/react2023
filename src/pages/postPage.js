import {useLocation} from "react-router-dom";

import {PostContainer} from "../Components/PostContainer/PostContainer";

const PostPage = () => {
    const {state:postId} = useLocation()

    return (
        <div>
            <PostContainer postId={postId}/>
        </div>
    );
};

export {PostPage};