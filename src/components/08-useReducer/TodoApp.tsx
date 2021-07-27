import React, { FormEvent, useReducer } from 'react';
import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './styles.css';
import { todoReducer, IStateTodo, IActionTodo } from './todoReducer';

interface FormValues {
    description: string;
}

const init: () => IStateTodo[] | [] = () => {
    return JSON.parse(localStorage.getItem('todos')||'[]');
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ formValues, handleInputChange, reset ] = useForm({
        description: ''
    });

    const { description }: FormValues = formValues;

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleAddToDo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description || '',
            done: false
        };

        const action: IActionTodo = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();
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
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, idx) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className={ `${ todo.done && 'complete'}` } onClick={() => handleToggle(todo.id)}>{idx+1}. {todo.desc}</p>
                                    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add ToDo</h4>
                    <hr />

                    <form onSubmit={handleAddToDo} className="d-grid gap-2">
                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Learn..." 
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1">Add</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}
