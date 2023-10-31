import css from './CommentsOfPost.module.css'
const CommentsOfPost = ({item}) => {
    const {postId, id, name, email, body} = item
    return (
        <div className={css.comDiv}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {CommentsOfPost};