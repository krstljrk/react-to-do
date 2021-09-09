import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState: [
        {id: 0, todo: "First Todo", completed: false}
    ],
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                todo: action.payload,
                completed: false
            }
            state.push(newTodo);
            //state.value.push(action.payload);
        },
    }
});

export const { add } = todoSlice.actions;

// EXPORT CURRENT STATE:

export default todoSlice.reducer;