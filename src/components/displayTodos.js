/*import React from 'react';
import { useSelector } from 'react-redux';
import { currentState } from '../features/todoSlice';

function DisplayTodos(props) {
    const todoItem = useSelector(currentState);

    const dummyData = [
        {
            id: 1,
            todo: "Todo activity one",
            completed: false
        },
        {
            id: 2,
            todo: "Todo activity two",
            completed: true
        },
    ]

    /*
    const renderTodos = () => {
        todoItem.map(item => {
            <li className="todoItem">
                {item.content}
            </li>

        })
    }*/
    /* THIS IS WHERE THE ISSUE LIES!!!! can't even map dummy data 
    const renderDummyData = (please) => {
        todoItem.map((item) =>
            <div className="todoItem">{item.todo}</div> 
        )
}


return (
    <div>
        {renderDummyData}
    </div>
);
}

export default DisplayTodos; */