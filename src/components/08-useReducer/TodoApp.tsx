import { useReducer, useEffect } from 'react';

import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer, IStateTodo, IActionTodo } from './todoReducer';

import './styles.css';

const init: () => IStateTodo[] | [] = () => {
    return JSON.parse(localStorage.getItem('todos')||'[]');
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleAddTodo = (newTodo: IStateTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDelete = (todoId: number) => {
        const action: IActionTodo = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId: number) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
