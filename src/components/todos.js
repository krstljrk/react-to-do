import React, { useState } from 'react';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            toDos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    submitTodo() {
        this.setState({
            input: '',
            toDos: [...this.state.toDos, this.state.input]
        })
    }

    render() {
        return (
            <div className="addTodos">
                <input type="text" className="todo-input" value={this.state.input} onChange={this.handleChange}/>
                <button className="add-btn" onClick={this.submitTodo}>Add</button>
            </div>
        )
    }

};

export default Todos;