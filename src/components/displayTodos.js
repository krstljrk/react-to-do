/*import React from 'react';
import { useSelector } from 'react-redux';

function DisplayTodos(props) {
    //const todoItem = useSelector((state) => state.todos.value);

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
        dummyData.map((item) =>
            <div className="todoItem">{item.todo}</div> 
        )
}


return (
    <div>
        {/*
            <div className="todoItem">
                <div>
                    
                    {dummyData[0].todo}
                </div>
            </div>
            <div className="todoItem">
                <div>
                    
                    {dummyData[1].todo}
                </div>
            </div>
            <ul>
                {renderTodos}
            </ul>
            }
        {renderDummyData("In the render method")}
    </div>
);
}

export default DisplayTodos;*/