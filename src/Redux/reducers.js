import {ADD} from "./actions";

const toDosReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                action.newTodo
            ];
        default:
            return state;
    }
}

export default toDosReducer;