import {useEffect, useState} from "react";
import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const PostContainer = ({postId}) => {
    const [post, setPost] = useState(0);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            <Post post={post}/>
        </div>
    );
};

export {PostContainer};