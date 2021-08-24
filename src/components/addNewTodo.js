import React, {useState} from 'react';

function AddNewTodo() {
    const [input, setInput] = useState[''];

    const handleChange = (event) => {
        setInput(event.target.value);
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
                    <button className="add-btn" onClick={this.submitTodo}>Add</button>
                </div>
    );
}

export default AddNewTodo;