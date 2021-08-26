import './App.css';
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
