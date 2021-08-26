import React from 'react';
import { useSelector } from 'react-redux';


function DisplayTodos({ id, content, completed }) {
    const todo = useSelector((state) => state.todo.value);



    return (
        <div className="todo-item">

        </div>
    );
}

export default DisplayTodos;