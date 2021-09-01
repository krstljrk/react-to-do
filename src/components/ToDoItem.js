import React from 'react'
import '../css/toDoItem.css'


function ToDoItem({ todo, completed, id}) {
    

    return (
        <div className="todoItem">
            {todo}
        </div>
    )
}

export default ToDoItem
