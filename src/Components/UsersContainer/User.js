import css from './User.module.css'
const User = ({item}) => {
    const {id, name} = item
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button>UserDetails</button>
        </div>
    );
};

export {User};