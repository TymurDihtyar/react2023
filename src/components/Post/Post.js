import React from 'react';

import css from './Post.module.css'

const Post = ({item, click}) => {
    const {id, title}= item;
    return (
        <div className={css.Post}>
            <h3>{id}. {title.toUpperCase()}</h3>
            <button className={css.but} onClick={()=>{click(id)}}>Details</button>
        </div>
    );
};

export {Post};