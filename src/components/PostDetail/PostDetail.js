import React from 'react';

import css from './PostDetail.module.css'

const PostDetail = ({postDetail}) => {
    const {id, title, body}=postDetail
    return (
        <div className={css.PostDetail}>
            <h2>{id}. {title.toUpperCase()}</h2>
            <p>{body}</p>
        </div>
    );
};

export {PostDetail};