const User = ({item}) => {
    const {id, name} = item
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button>UserDetails</button>
        </div>
    );
};

export {User};