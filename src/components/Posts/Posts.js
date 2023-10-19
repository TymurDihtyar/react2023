import React from 'react';
import {useEffect, useState} from 'react';

import './Posts.module.css'
import {Post} from "../Post/Post";
import {postServise} from "../../servises/postServise";
import {PostDetail} from "../PostDetail/PostDetail";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetail, setPostDetail] = useState(null);

    useEffect(() => {
        postServise.getAll().then(({data}) => setPosts(data));
    }, []);

    const click = async (postId) => {
        const {data} = await postServise.getById(postId);
        setPostDetail(data);
    }

    return (
        <div>
            <div className={'allPosts'}>
                {posts.map(item => <Post key={item.id} item={item} click={click}/>)}
            </div>
            {
                postDetail && <PostDetail key={postDetail.id} postDetail={postDetail}/>
            }
        </div>
    );
};

export {Posts};