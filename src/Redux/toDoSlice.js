import { createSlice } from "@reduxjs/toolkit";

// automatically creates action creators:
const toDoSlice = createSlice({
    type: "todo",
    initialState: [
        // dummy data:
        { id: 1, title: "todo1", isCompleted: false },
        { id: 2, title: "todo2", isCompleted: false },
        { id: 3, title: "todo3", isCompleted: true },
        { id: 4, title: "todo4", isCompleted: false },
    ],
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                id: Date.now(),
                title: action.payload.title,
                // default completed value:
                isCompleted: false
            }
            state.push(newToDo);
        }
    }
})

// createSlice() method creates actions based on reducers and assigns them to the variable "toDoSlice".
// Here is getting the actions out of the actions object by export:
export const {addToDo } = toDoSlice.actions;

// Because we need to add the reducer to the store:
export default toDoSlice.reducer;