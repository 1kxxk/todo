import React, { useState } from 'react'
import {TodoContext} from '../../context/TodoContext'
import { TODOS } from '../../constans/sameple-todos'

const TodoProvider = ({children}) => {
        const [todos, setTodos] = useState(TODOS)
        const [text, setText] = useState('')
        const handleSubmit = (e) => {
          e.preventDefault()
          if (!text.trim()) {
            return;
          }
          setTodos([{id:crypto.randomUUID(), text:text}, ...todos])
          setText('')
        }
        const handleCompleted = (id) => {
          const updatedTodos = todos.map((todo)=>{
            return id === todo.id ? {...todo, completed: !todo.completed} : todo
          })
          setTodos(updatedTodos)
        };
        const handleDelete = (id) => {
          setTodos((todos)=>todos.filter((todo)=>id !== todo.id))
        };
  return (
    <TodoContext.Provider value={{todos, text, setText, handleSubmit, handleCompleted, handleDelete}}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider