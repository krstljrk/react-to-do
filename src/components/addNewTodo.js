import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';

function AddNewTodo() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const addTodo = () => {
        console.log(`Adding ${input} to state`);

        dispatch(add({
            id: 0,
            todo: input,
            completed: false
        }))
    }

    return (
        <div className="inputSection">
            <h2>Enter new task:</h2>
            <input
                type="text"
                className="todoInput"
                value={input}
                onChange={handleChange}
            />
            <button className="add-btn" onClick={() => {
                console.log(`Adding ${input} to state`);

                dispatch(add({
                    id: 0,
                    todo: input,
                    completed: false
                }))
            }
            }>Add</button>
        </div>
    );
}

export default AddNewTodo;