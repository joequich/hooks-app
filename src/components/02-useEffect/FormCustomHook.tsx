import { FormEvent, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

interface FormValues {
    name?: string;
    email?: string;
    password?: string;
}

export const FormCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password }: FormValues = formValues;

    useEffect(() => {
        console.log('email changed');
    }, [email]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form Custom Hook</h1>
            <hr />

            <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Your name" aria-placeholder="Your name" autoComplete="off" 
                    value={name}
                    onChange={handleInputChange}
                 />
            </div>

            <div className="mb-3">
                <input type="text" name="email" className="form-control" placeholder="email@example.com" aria-placeholder="email@example.com" autoComplete="off" 
                    value={email}
                    onChange={handleInputChange}
                 />
            </div>

            <div className="mb-3">
                <input type="password" name="password" className="form-control" placeholder="******" aria-placeholder="******" autoComplete="off" 
                    value={password}
                    onChange={handleInputChange}
                 />
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};
