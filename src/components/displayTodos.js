import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";

function DisplayTodos() {
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
        props.todos.map(item => {
            <li>{item.content}</li>
        })
    }
    */

    return (
        <div>
            <div className="todoItem">
                <div>
                    {/*renderTodos*/}
                    {dummyData[0].todo}
                </div>
            </div>
            <div className="todoItem">
                <div>
                    {/*renderTodos*/}
                    {dummyData[1].todo}
                </div>
            </div>

        </div>
    );
}

export default DisplayTodos;