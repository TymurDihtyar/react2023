import {User} from "./User";
import {UserForm} from "./UserForm";

const Users = ({users, setUsers}) => {

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map(item => <User key={item.id} item={item}/>)}
        </div>
    );
};

export {Users};