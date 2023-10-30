import css from './PostOfCurrentUser.module.css'
const PostOfCurrentUser = ({item}) => {
    const {title, userId} = item
    return (
        <div className={css.divPost}>
            <h6>{title}</h6>
            <button className={css.userBut}>Details</button>
        </div>
    );
};

export {PostOfCurrentUser};