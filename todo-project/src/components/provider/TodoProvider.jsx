import React, { useEffect, useState } from 'react'
import {TodoContext} from '../../context/TodoContext'
import { todoClient } from '../../lib/todoClient'

const TodoProvider = ({children}) => {
        const [todos, setTodos] = useState([])
        const [text, setText] = useState('')

        const getTodos = async () => {
          const {data} = await todoClient.get('/')
          setTodos(data)
        }

        const addTodos = async (text) => {
          const {data} = await todoClient.post('/', {
            text,
            completed: false,
          })
          await getTodos()
          return data
        }

        const handleSubmit = (e) => {
          e.preventDefault()
          if (!text.trim()) {
            return;
          }
          setTodos([{id:crypto.randomUUID(), text:text}, ...todos])
          setText('')
        }

        const handleCompleted = async (id, currentCompleted) => {
          const {data} = await todoClient.patch(`/${id}`,{
            completed: !currentCompleted,
          })
          await getTodos()
          return data
        };

        const handleDelete = async (id) => {
          const {data} = await todoClient.delete(`/${id}`)
          await getTodos()
          return data
        };

        useEffect(()=>{
          getTodos()
        },[])
        
  return (
    <TodoContext.Provider value={{todos, text, setText, handleSubmit, handleCompleted, handleDelete}}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider