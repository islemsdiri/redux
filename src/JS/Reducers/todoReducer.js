import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISDONE } from "../Constants/ActionsTypes";

const initState={
todos:[
   { id:0,
description:"tache1",
isDone:false},
{ id:1,
    description:"tache2",
    isDone:false},
    { id:2,
        description:"tache3",
        isDone:false}
]
}
const TodoReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TODO: return{
            ...state,todos:[...state.todos,action.a]
            }
        case DELETE_TODO:return{
            ...state,todos:state.todos.filter(todo=>todo.id!==action.payload)
        }   
        case ISDONE:return{
            ...state,todos:[...state.todos.map(todo=>todo.id===action.payload ? {...todo.isDone=(!todo.isDone)} : todo)]
        } 
        case EDIT_TODO:return{
...state,todos:state.todos.map(todo=>todo.id===action.a ?{...todo,description:action.b,isDone:false}: todo)
        }
        default:return state
    }
}
export default TodoReducer;