import css from './User.module.css'
const User = ({item}) => {
    const {id, name} = item
    return (
        <div className={css.render}>
            <h1>USERS FROM JSONPLASEHOLDER</h1>
            <div className={css.userBlock}>
                <div className={css.userData}>#{id} - {name.toUpperCase()}</div>
                <button className={css.userBut}>UserDetails</button>
            </div>
        </div>
    );
};

export {User};