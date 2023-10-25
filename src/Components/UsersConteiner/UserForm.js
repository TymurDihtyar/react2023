import {useForm} from "react-hook-form";

import {usersService} from "../../services/usersService";

const UserForm = ({setUsers}) => {
    const {reset, register, handleSubmit} = useForm()

    const save = async (user) => {
        const {data} = await usersService.create(user)
        setUsers(prev => [...prev, data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'}{...register('name')}/>
            <input type="text" placeholder={'username'}{...register('username')}/>
            <input type="text" placeholder={'email'}{...register('email')}/>
            <button>create</button>
        </form>
    );
};

export {UserForm};