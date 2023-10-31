import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetails} from "../Components/PostContainer/PostDetails";
import {commentService} from "../services/commentService";
import {CommentsOfPost} from "../Components/CommentsContainer/CommentsOfPost";
import css from './PostDetailPage.module.css'

const PostDetailPage = () => {
    const {data: post} = useLoaderData()
    const {id} = post
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(id).then(({data}) => setComments(data))
    }, [id]);

    return (
        <>
            <h1>POST DETAILS</h1>
            <div>
                <PostDetails post={post}/>
            </div>
            <div className={css.renderComments}>
                {comments.map(item => <CommentsOfPost key={item.id} item={item}/>)}
            </div>
        </>
    );
};

export {PostDetailPage};