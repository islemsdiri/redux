import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../JS/Actions/TodoAction"


const AddTodo=()=>{
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
    const add=()=>{
        return(
            dispatch(addTodo({id:Date.now(),description:input,isDone:false}))
        )
    }
    return(
        
        <div>
            <input value="text " value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={add}>Valider</button>
            <button>Annuler</button>
        </div>
    )
}
export default AddTodo