import {useNavigate} from "react-router-dom";

import css from './User.module.css'

const User = ({item}) => {
    const {id, name} = item;
    const navigate = useNavigate();

    return (
        <div className={css.userBlock}>
            <div className={css.userData}>#{id} - {name.toUpperCase()}</div>
            <button className={css.userBut} onClick={() => navigate(`${id}`)}>Details</button>
        </div>
    );
};

export {User};