import React from 'react';

const PostDetail = ({postDetail}) => {
    const {id, title, body}=postDetail
    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export {PostDetail};