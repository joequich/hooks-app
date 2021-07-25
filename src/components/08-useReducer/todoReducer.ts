export interface IStateTodo {
    id: number,
    desc: string,
    done: boolean
}

// export type IActionTodo = 
//     | { type: "add"; payload: IStateTodo }
//     | { type: "modify"; payload: IStateTodo };

export interface IActionTodo {
    type: string,
    payload: IStateTodo
}

export const todoReducer = (state: IStateTodo[], action: IActionTodo) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
    
        default:
            return state;
    }
}