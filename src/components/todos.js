import React from 'react';
import { connect } from 'react-redux';
import {addTodos} from '../redux/actions';



const mapStateToProps = (state) => {
    return {
        toDos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewToDo: (newToDo) => {
            dispatch(addTodos(newToDo));
        }
    }
}

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
        // temporary
        const renderTodos = this.state.toDos.map(todo => 
            <li key={todo}>{todo}</li>
        );

        return (
            <div className="addTodos">
                <input 
                    type="text" 
                    className="todo-input" 
                    value={this.state.input} 
                    onChange={this.handleChange}
                />
                <button className="add-btn" onClick={this.submitTodo}>Add</button>

                <ul>
                    {renderTodos}
                </ul>
            </div>
        )
    }

};

// export default Todos;
// Connecting the store to this component:

export default connect(mapStateToProps, mapDispatchToProps)(Todos)