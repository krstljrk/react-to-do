
const ADD = 'ADD';

// Action creator:
const addTodos = (newTodo) => {
    return {
        type: ADD,
        newTodo
    }
}

export {addTodos, ADD};