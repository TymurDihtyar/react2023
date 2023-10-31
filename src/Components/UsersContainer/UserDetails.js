import {useNavigate} from "react-router-dom";

import css from './UserDetails.module.css';

const UserDetails = ({user}) => {
    const {id, name, username, email, phone} = user
    const navigate = useNavigate()

    return (
        <>
            <div className={css.userDetails}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>username: {username}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
            </div>
            <button className={css.userBut} onClick={() => navigate(`posts`)}>Post of current user</button>
        </>
    );
};

export {UserDetails};