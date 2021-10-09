import './css/style-file.scss';
import AddNewTodo from './components/addNewTodo';
import ToDoItem from './components/ToDoItem';
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <div className="app container-fluid">
        <div className="add__container">
          <AddNewTodo />
        </div>

        <div className="todo__container">
          {
            todos.map(item => {
              console.log(item)
              return (
                <ToDoItem
                  todo={item.todo}
                  completed={item.completed}
                  id={item.id} />
              )

            }
            )
          }
        </div>
      </div>
      <p className="footer">App created by Kristel Juurik</p>
    </div>

  );
}

export default App;
