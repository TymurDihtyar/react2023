import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useApp Context";
import {authService} from "../../services/authService";

const Header = () => {
    const {isAuth, me, setMe, setIsAuth} = useAppContext();
    const navigate = useNavigate();

    const logout = ()=>{
        authService.deleteToken()
        navigate('/login')
        setMe(null)
        setIsAuth(null)
    }

    return (
        <div className={css.Header}>
            <h2>Cars</h2>
            {
                isAuth ?
                    <div>
                        {me.username}
                        <button onClick={logout}>logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }
        </div>
    );
};

export {Header};