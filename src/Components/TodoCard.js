import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, IsDone } from "../JS/Actions/TodoAction";


const TodoCard=({todo})=>{
    const [textEdited,setTextEdided]=useState(todo.description)
  const dispatch=useDispatch()
  const editable=()=>{
      dispatch(IsDone(todo.id))
  }
    return(
        <div>
{todo.isDone ?(<>
<input type="text" value={textEdited} onChange={e=>setTextEdided(e.target.value)}></input>
<button onClick={()=>dispatch(editTodo(todo.id,textEdited))}>Save</button>
<button onClick={editable}>Cancel</button>
</>
    ):( <>
<p>{todo.description}</p>
            <button onClick={editable}>EDIT</button>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>DELETE</button>
            </>)

}


           
        </div>
    )
}
export default TodoCard;