import css from './Post.module.css'
const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={css.postt}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};