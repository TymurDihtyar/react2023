import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {registerValidator} from "../../validators/registerValidator";
import {authService} from "../../services/authService";
import {useState} from "react";

const RegisterForm = () => {
    const [serverError, setServerError] = useState(null);

    const {reset, register, formState: {errors, isValid}, handleSubmit} = useForm({
        mode: 'onBlur',
        resolver: joiResolver(registerValidator)
    });
    const save = async (user) => {
        try {
            await authService.register(user)
            setServerError(null)

        } catch (e) {
            setServerError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div>Username: <input type="text" {...register('username')}/></div>
            {errors.username && <div>{errors.username.message}</div>}
            {setServerError&& <div style={{color:'red'}}>User name already exists</div>}
            <div>Password: <input type="text" {...register('password')}/></div>
            {errors.password && <div>{errors.password.message}</div>}
            <div>ConfirmPassword: <input type="text" {...register('re_password')}/></div>
            {errors.re_password && <div>{errors.re_password.message}</div>}
            <button disabled={!isValid}>Register</button>
        </form>
    );
};

export {RegisterForm};