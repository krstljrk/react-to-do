import React from 'react'
import '../css/style-file.scss'
import { useDispatch } from 'react-redux';
import { remove } from '../features/todoSlice'


function ToDoItem({ todo, completed, id }) {
    const dispatch = useDispatch();

    const deleteItem = () => {
        console.log("In deleteItem function.");
        dispatch(remove(id));
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
                <button className="btn btn-info" onClick={console.log("clicking edit")}>EDIT</button>
                <button className="btn btn-success" onClick={console.log("clicking done")}>DONE</button>
                <button
                    className="btn btn-danger"
                    onClick={deleteItem}
                    type="submit">DELETE</button>
            </div>

        </div>
    )
}

export default ToDoItem;
