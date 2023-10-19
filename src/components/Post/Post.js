import React from 'react';

import './Post.module.css'

const Post = ({item, click}) => {
    const {id, title}= item;
    return (
        <div className={'Post'}>
            <h2>{id} {title}</h2>
            <button onClick={()=>{click(id)}}>Details</button>
        </div>
    );
};

export {Post};