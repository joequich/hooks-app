import { TodoListItem } from './TodoListItem';
import { IStateTodo } from './todoReducer';

interface ITodoList {
    todos: IStateTodo[];
    handleToggle: (todoId: number) => void;
    handleDelete: (todoId: number) => void;
}

export const TodoList = ({ todos, handleToggle, handleDelete }: ITodoList) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, idx) => (
                    <TodoListItem key={todo.id} todo={todo} index={idx} handleToggle={handleToggle} handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}
