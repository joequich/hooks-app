export interface IStateTodo {
    id: number,
    desc: string,
    done: boolean
}

export type IActionTodo = 
    | { type: 'add', payload: IStateTodo }
    | { type: 'delete' | 'toggle', payload: number };

export const todoReducer = (state: IStateTodo[], action: IActionTodo) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
    
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map(todo => 
                (todo.id === action.payload)
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        // case 'toggle-old':
        //     return state.map(todo => {
        //         if (todo.id === action.payload) {
        //             return {
        //                 ...todo,
        //                 done: !todo.done
        //             };
        //         } else {
        //             return todo;
        //         }
        //     });

        default:
            return state;
    }
}