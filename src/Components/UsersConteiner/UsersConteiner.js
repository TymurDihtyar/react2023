import {useEffect, useState} from "react";

import {usersService} from "../../services/usersService";
import {Users} from "./Users";

const UsersConteiner = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, [setUsers]);

    return (
        <div style={{width: '50%'}}>
            <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export {UsersConteiner};