import React from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../redux/actions';



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
            input: ''
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
        this.props.submitNewToDo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        const renderTodos = this.props.toDos.map(item =>
            <div>
                <li key={item}>{item}</li>
                <button>Complete</button>
            </div>

        );

        return (
            <div className="app">
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                    <button className="add-btn" onClick={this.submitTodo}>Add</button>
                </div>

                <div className="toDoGrid">
                    <div className="toDoStyle">
                        <ul>
                            {renderTodos}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }

};

// export default Todos;
// Connecting the store to this component:

export default connect(mapStateToProps, mapDispatchToProps)(Todos)