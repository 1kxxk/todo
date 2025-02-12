import styled from 'styled-components';
import TodoItem from './todo/TodoItem';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const TodoList = () => {
  const {todos} = useContext(TodoContext)
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListcontent>
        {todos.map((todo)=>(
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
  margin-top: 3rem;
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