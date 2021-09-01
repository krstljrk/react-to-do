import React from 'react'
import '../css/toDoItem.css'


function ToDoItem({ todo, completed, id}) {
    

    return (
        <div className="todoItem">
            <p>{todo}</p>
            <div className="todoItem__btns">
                <button>EDIT</button>
                <button>DONE</button>
                <button>DELETE</button>
            </div>
            
        </div>
    )
}

export default ToDoItem
