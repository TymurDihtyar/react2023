import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services/authService";

const LoginForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const login = async (user) => {
        try {
            await authService.login(user)
            setServerError(null)
            navigate('/cars')
        } catch (e) {
            setServerError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError && <div style={{color: "red"}}>Username or pass incorrect</div>}
            <div>UserName <input type="text" {...register('username')}/></div>
            <div>Password <input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};