import React from 'react';
import { useSelector } from 'react-redux';

function DisplayTodos() {
    const todo = useSelector((state) => state.todo.value);

    const renderTodos = () => {
        todo.map(todo =>
            <div className="item">
                <li key={todo}>{todo}</li>
                <br />
                <button>Complete</button>
                <button>Delete</button>
            </div>
        )
    }

    return (
        <div className="toDoGrid">
            <div className="toDoStyle">
                <ul>
                    {renderTodos}
                </ul>
            </div>

        </div>
    );
}

export default DisplayTodos;