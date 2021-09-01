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
        }
    }
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;