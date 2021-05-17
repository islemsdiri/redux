
import { useSelector } from 'react-redux';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoCard from './Components/TodoCard';


function App() {
  const todoList=useSelector(state=>state.todos)
  return (
   
    <div className="App">
      <AddTodo/>
 {    
 
 todoList.map(todo=> <TodoCard key={todo.id} todo={todo} />) 
 }
         
    </div>
  );
}

export default App;
