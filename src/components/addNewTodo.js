import React, { useState } from 'react';
import '../css/style-file.scss'
import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';

function AddNewTodo() {
    const [input, setInput] = useState("");

    const [empty, setEmpty] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const addTodo = () => {
        console.log(`Adding ${input} to state`);

        if (input) {
            dispatch(add(input));
        } else {
            setEmpty(true);
        }

        setTimeout(() => {
            setEmpty(false);
        }, 8000);

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
                {empty && <p>Please enter text to add a new task.</p>}
                <button className="add-btn"
                    onClick={addTodo}
                    type="submit">
                    ADD
                </button>

            </div>

        </div>
    );
}

export default AddNewTodo;