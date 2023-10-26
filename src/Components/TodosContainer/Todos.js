import {useEffect, useState} from "react";
import {torosService} from "../../services/torosService";
import {Todo} from "./Todo";
import css from './Todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        torosService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div className={css.todos}>
            {todos.map(item => <Todo key={item.id} item={item}/>)}
        </div>
    );
};

export {Todos};