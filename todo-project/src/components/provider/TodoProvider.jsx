import React, { useState } from 'react'
import {TodoContext} from '../../context/TodoContext'

const TodoProvider = ({children}) => {
    const TODOS = [
        { id: 1, text: "Buy milk", completed: false },
        { id: 2, text: "Clean the house", completed: false },
        { id: 3, text: "Go for a run", completed: false },
        { id: 4, text: "Finish homework", completed: false },
        { id: 5, text: "Call mom", completed: false },
        { id: 6, text: "Buy groceries", completed: false },
        { id: 7, text: "Walk the dog", completed: false },
        { id: 8, text: "Read a book", completed: false },
        { id: 9, text: "Do laundry", completed: false },
        { id: 10, text: "Write code", completed: false },
        ];
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