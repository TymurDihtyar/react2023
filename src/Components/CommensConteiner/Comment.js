const Comment = ({item}) => {
    const {id, name, email, body} = item
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};