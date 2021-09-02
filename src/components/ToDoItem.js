import React from 'react'
import '../css/toDoItem.css'
import { useDispatch } from 'react-redux';
import { deleteAction } from '../features/deleteSlice';


function ToDoItem({ todo, completed, id }) {
    const dispatch = useDispatch();

    const deleteItem = () => {
        console.log("In deleteItem function.");
        dispatch(deleteAction(id));
    }

    const markAsComplete = () => {
        completed = true;
    }

    return (
        <div className="todoItem">
            <div>
                <p>{todo}</p>
            </div>
            
            <div className="todoItem__btns">
                <button onClick={console.log("clicking edit")}>EDIT</button>
                <button onClick={console.log("clicking done")}>DONE</button>
                <button
                    className="delete-btn"
                    onClick={deleteItem}
                    type="submit">DELETE</button>
            </div>

        </div>
    )
}

export default ToDoItem
