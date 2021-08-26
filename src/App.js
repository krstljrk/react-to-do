import './App.css';
import AddNewTodo from './components/addNewTodo';
import DisplayTodos from './components/displayTodos';

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
]

function App() {
  return (
    <div className="App">
      <div>
        <AddNewTodo className="app-container"/>
        <div className="todo-container">
          {
            dummyData.map(item => {
              <DisplayTodos 
              id={item.id}
              content={item.todo}
              completed={item.completed}
              />
            })
          }
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
