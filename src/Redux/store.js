

const ADD = 'ADD';

// Action creator:
const addTodos = (newTodo) => {
    return {
        type: ADD,
        newTodo
    }
}

const toDosReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                action.newToDo
            ];
        default:
            return state;
    }
}

const store = Redux.createStore(toDosReducer);

