import { DELETE_TODO, EDIT_TODO, ISDONE } from '../Constants/ActionsTypes'

import { ADD_TODO } from "../Constants/ActionsTypes"



export const addTodo=(newTodo)=>{
    return{
        type:ADD_TODO,a:newTodo
    }
    
}
export const editTodo=(id,editedTodo)=>{
    return{
        type:EDIT_TODO,a:id,b:editedTodo
    }
}

export const deleteTodo=(index)=>{
    return{
        type:DELETE_TODO,payload:index
    }
}
export const IsDone=(index)=>{
    return{
        type:ISDONE,payload:index
    }
}

