import React from 'react'


function ToDoItem({ content, completed, id}) {
    return (
        <div className="todoItem">
            <p>{content}</p>
        </div>
    )
}

export default ToDoItem
