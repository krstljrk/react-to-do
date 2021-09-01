import './App.css';
import AddNewTodo from './components/addNewTodo';
import DisplayTodos from './components/displayTodos';
import ToDoItem from './components/ToDoItem';
import { useSelector } from 'react-redux';
import { currentState } from './features/todoSlice';

/*
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
]*/


function App() {
  const todos = useSelector(currentState);

  return (
    <div className="app">
      <div>
        <div className="add__container">
          <AddNewTodo />
        </div>

        <div className="todo__container">
          {
            todos.map(item => (
              <ToDoItem 
              content={item.content}
              completed={item.completed}
              id={item.id} />
            ))
          }

        </div>
      </div>


    </div>
  );
}

export default App;
