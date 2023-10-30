const User = ({item}) => {
    const {id, name, username, email, phone} = item
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <button>UserDetails</button>
        </div>
    );
};

export {User};