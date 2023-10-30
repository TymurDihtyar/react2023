import css from './User.module.css'

const User = ({item}) => {
    const {id, name} = item
    return (
        <div className={css.userBlock}>
            <div className={css.userData}>#{id} - {name.toUpperCase()}</div>
            <button className={css.userBut}>Details</button>
        </div>
    );
};

export {User};