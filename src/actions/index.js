// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = (payload) => {
    return {
        type: 'AddTodo',
        payload: {
            ...payload,
            status: 'Activo',
            id: todoId++,
        }
    }
};

export const removeTodo = (id) => {
    return {
        type: 'RemoveTodo',
        payload:id
    }
};
export const toTerminado = (id) => {
    return {
        type: 'toTerminado',
        payload:id
    }
};
export const todoDetail = (id) => {
    return {
        type: 'TodoDetail',
        payload: id
    }
};