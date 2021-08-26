import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const todoSlice = createSlice({
    name: "todos",
    initialState : {
        value: initialStateValue
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export default todoSlice.reducer;