import css from './PostOfCurrentUser.module.css'
import {useNavigate} from "react-router-dom";

const PostOfCurrentUser = ({item}) => {
    const {title, id} = item
    const navigate = useNavigate()
    
    return (
        <div className={css.divPost}>
            <h6>{title}</h6>
            <button className={css.userBut} onClick={() => navigate(`/posts/${id}`)}>Details</button>
        </div>
    );
};

export {PostOfCurrentUser};

// 'posts/:id'