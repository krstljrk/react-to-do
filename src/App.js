import './App.css';
import Todos from './components/todos';
import AddNewTodo from './components/addNewTodo';
import DisplayTodos from './components/displayTodos';

function App() {
  return (
    <div className="App">
      <AddNewTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
