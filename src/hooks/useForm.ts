import { ChangeEvent, useState } from "react";

export const useForm: (initialState: object) => [values: any, handleInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void, reset: () => void] = (initialState) => {
   
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];
};
