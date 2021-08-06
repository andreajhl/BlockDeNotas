// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = (payload) => {
    return {
        type: 'AddTodo',
        payload: {
            ...payload,
            status: 'Todo',
            id: todoId++,
        }
    }
};

export const removeTodo = (payload) => {
    return {
        type: 'RemoveTodo',
        payload,
    }
};

export const toInProgress = (payload) => {
    return {
        type: 'ToInProgress',
        payload,
    }
};

export const toDone = (payload) => {
    return {
        type: 'ToDone',
        payload,
    }
};;