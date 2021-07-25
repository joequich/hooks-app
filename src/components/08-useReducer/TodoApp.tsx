import React, { FormEvent, useReducer } from 'react';

import './styles.css';
import { todoReducer, IStateTodo } from './todoReducer';

export const TodoApp = () => {

    const initialState: IStateTodo[] = [{
        id: new Date().getTime(),
        desc: 'Learn React',
        done: false
    }];

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleAddToDo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'New Task',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
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
                                    <p className="text-center">{idx+1}. {todo.desc}</p>
                                    <button className="btn btn-danger">Delete</button>
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
                            autoComplete="off"/>
                        
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1">Add</button>
                    </form>
                </div>
            </div>

            
        </div>
    )
}
