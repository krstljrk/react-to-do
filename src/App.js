import './App.css';
import AddNewTodo from './components/addNewTodo';
import DisplayTodos from './components/displayTodos';

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
]
*/

function App() {
  return (
    <div className="app">
      <div>
        <AddNewTodo className="app__container"/>
        <div className="todo__container">
          <DisplayTodos />
          {/*
            dummyData.map(item => 
              <DisplayTodos
              id={item.id}
              content={item.todo}
              completed={item.completed}
              />
            )
            */}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
