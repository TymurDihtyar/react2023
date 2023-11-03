import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services/authService";
import {useAppContext} from "../../hooks/useApp Context";

const LoginForm = () => {
    const [serverError, setServerError] = useState(null)
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()
    const {setIsAuth, setMe} = useAppContext()

    const login = async (user) => {
        try {
            await authService.login(user)
            const {data} = await authService.me()
            setServerError(null)
            navigate('/cars')
            setIsAuth(true)
            setMe(data)
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