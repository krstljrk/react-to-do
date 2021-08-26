import React from 'react';
import { useSelector } from 'react-redux';


function DisplayTodos({ id, content, completed }) {

    return (
        <div className="todoItem">
            <p className={completed && 'todoItem--done'}>{content}</p>
        </div>
    );
}

export default DisplayTodos;