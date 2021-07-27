import { FormEvent } from 'react';
import { useForm } from '../../hooks/useForm';
import { IStateTodo } from './todoReducer';

interface FormValues {
    description: string;
}

interface ITodoAdd {
    handleAddTodo: (newTodo: IStateTodo) => void;
}

export const TodoAdd = ({ handleAddTodo }: ITodoAdd) => {

    const [ formValues, handleInputChange, reset ] = useForm({
        description: ''
    });

    const { description }: FormValues = formValues;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description || '',
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add ToDo</h4>
            <hr />

            <form onSubmit={handleSubmit} className="d-grid gap-2">
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
        </>
    )
}
