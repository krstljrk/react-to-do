import { createSlice } from "@reduxjs/toolkit";
import { currentState } from "./todoSlice";

const initialState = currentState;

export const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {
        deleteAction: (state, action) => {
            // need action for id
            
            state.todoList.map(obj => {
                if (action.payload.id == obj.id) {
                    let index = state.todoList.findIndex(obj);
                    // Placeholder method:
                    console.log(index);
                    let removedItem = state.todoList.splice(index, 1);
                    console.log(`User removed ${removedItem}`);
                } else {
                    console.log("No such object");
                }
            })
            //state.todoList.
        },
    }
});

export const { deleteAction } = deleteSlice.actions;

export default deleteSlice.reducer;