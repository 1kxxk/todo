import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSearchParams } from 'react-router';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

const TodoList = () => {
  const {todos} = useContext(TodoContext)

  const [searchParams] = useSearchParams()
  const selectedFiter = searchParams.get('filter')
  
  const getFilterdTodos = (selectedFilter) => {
    if(selectedFilter === 'completed') {
      return todos.filter((todo)=>todo.completed)
    }

    if(selectedFilter === 'pending') {
      return todos.filter((todo)=>!todo.completed)
    }

    return todos;
  }

  const filterdTodos = getFilterdTodos(selectedFiter)
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListcontent>
        {filterdTodos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </TodoListcontent>
    </TodoListSection>
  )
}

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`
const TodoListcontent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export default TodoList