import { createContext } from 'react';

interface IUserContext {
    id: number;
    name: string;
    email: string;
}

export interface IUserStateContext {
    user: IUserContext | {};
    setUser: (value: IUserContext | {}) => void;
}

const userContextDefaultValue: IUserStateContext = {
    user: {},
    setUser: () => null
}

export const UserContext = createContext<IUserStateContext>(userContextDefaultValue);