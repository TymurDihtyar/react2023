import {useEffect, useState} from "react";

import {postsService} from "../../services/postsService";
import {Post} from "./Post";

const PostContainer = ({postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};