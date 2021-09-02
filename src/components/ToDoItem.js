import React from 'react'
import '../css/toDoItem.css'
import { useDispatch } from 'react-redux';
import { deleteAction } from '../features/deleteSlice';


function ToDoItem({ todo, completed, id}) {
    const dispatch = useDispatch();
    
    const deleteTodo = () => {
        dispatch(deleteAction(id));
    }

    return (
        <div className="todoItem">
            <p>{todo}</p>
            <div className="todoItem__btns">
                <button>EDIT</button>
                <button>DONE</button>
                <button
                className="delete-btn"
                onClick={deleteTodo}
                type="submit">DELETE</button>
            </div>
            
        </div>
    )
}

export default ToDoItem
