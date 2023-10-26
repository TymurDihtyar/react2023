import css from './Todo.module.css'
const Todo = ({item}) => {
    const {id, title, completed} = item
    return (
        <div className={css.todo}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {`${completed}`}</div>
        </div>
    );
};

export {Todo};