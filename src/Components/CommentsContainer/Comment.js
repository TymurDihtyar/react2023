import css from './Commet.module.css'
const Comment = ({item}) => {
    const {postId, id, name, email, body} = item
    return (
        <div className={css.comment}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};