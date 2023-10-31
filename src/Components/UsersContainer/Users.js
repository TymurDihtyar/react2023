import {User} from "./User";
import css from "./User.module.css";

const Users = ({users}) => {

    return (
        <>
            <h1>USERS FROM JSONPLASEHOLDER</h1>
            <div className={css.render}>
                {users.map(item => <User key={item.id} item={item}/>)}
            </div>
        </>
    );
};

export {Users};