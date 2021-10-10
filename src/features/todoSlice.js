import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [
            { id: 0, todo: "First Todo", completed: false },
            { id: 1, todo: "Second Todo", completed: false },
            { id: 2, todo: "Third Todo", completed: false }
        ]
    },
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                todo: action.payload,
                completed: false
            }
            state.todoList.push(newTodo);
            //state.value.push(action.payload);
        },
        remove: (state, action) => {
            const newState = state.todoList.filter(todo => todo.id != action.payload);
            state.todoList = newState;
        },
    }
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;