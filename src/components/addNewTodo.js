import React, { useState } from 'react';
import '../css/addTodo.css'
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';
import { uuid } from 'uuidv4';

function AddNewTodo() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const addTodo = () => {
        console.log(`Adding ${input} to state`);

        dispatch(add({
            id: uuid(),
            todo: input,
            completed: false
        }));
        
        // Clear input field once button is clicked and action dispatched
        setInput("");
    }

    return (
        <div className="inputSection">
            <h2>Enter new task:</h2>
            <div className="inputElem">
                <input
                type="text"
                className="todoInput"
                value={input}
                onChange={handleChange}
            />
            </div>
            <div className="inputElem">
                <button className="add-btn" onClick={addTodo}>Add</button>
            </div>
            
        </div>
    );
}

export default AddNewTodo;