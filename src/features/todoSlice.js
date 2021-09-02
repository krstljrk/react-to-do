import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add: (state, action) => {
            state.todoList.push(action.payload);
            //state.value.push(action.payload);
        },
    }
});

export const { add } = todoSlice.actions;

// EXPORT CURRENT STATE:
export const currentState = state => state.todos.todoList

export default todoSlice.reducer;