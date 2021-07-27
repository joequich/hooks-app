import { IStateTodo } from './todoReducer';

interface ITodoListItem {
    todo: IStateTodo;
    index: number;
    handleToggle: (todoId: number) => void;
    handleDelete: (todoId: number) => void;
}

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }: ITodoListItem) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p className={ `${ todo.done && 'complete'}` } onClick={() => handleToggle(todo.id)}>{index+1}. {todo.desc}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
    )
}
