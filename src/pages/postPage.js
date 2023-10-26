import {PostContainer} from "../Components/PostContainer/PostContainer";
import {useLocation} from "react-router-dom";

const PostPage = () => {
    const {state:postId} = useLocation()

    return (
        <div>
            <PostContainer postId={postId}/>
        </div>
    );
};

export {PostPage};