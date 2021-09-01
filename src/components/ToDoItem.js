import React from 'react'


function ToDoItem({ todo, completed, id}) {
    

    return (
        <div className="todoItem">
            {todo}
        </div>
    )
}

export default ToDoItem
