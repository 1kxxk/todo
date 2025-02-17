import React, { useContext } from 'react'
import styled from 'styled-components'
import {TodoContext} from '../../context/TodoContext'
import { Link, useNavigate } from 'react-router'

const TodoItem = ({todo}) => {
  const {handleCompleted, handleDelete} = useContext(TodoContext)
  const navigate = useNavigate();

  const navigateAfterDelete = (id) => {
    handleDelete(id);
    navigate('/')
  }
  return (
    <TodoItemsWrapper>
          <TodoItemLink to={`/${todo.id}`} $todo={todo}>{todo.text}</TodoItemLink>
          <TodoItemActions>
          <ActionButton onClick={()=>handleCompleted(todo.id)}
            $backgroundColor={todo.completed ? '#242424' : '#582be6'}>
            {todo.completed?'취소하기':'완료하기'}
          </ActionButton>
          <ActionButton onClick={()=>navigateAfterDelete(todo.id)} $backgroundColor = '#e6582b'>
            삭제하기
          </ActionButton>
          </TodoItemActions>
      </TodoItemsWrapper>
  )
}

const TodoItemsWrapper = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
`

const TodoItemLink = styled(Link)`
  text-decoration: ${({$todo}) => $todo.completed ? 'line-through': 'none'};
  &:hover {
    text-decoration: underline;
  }
`
const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  `
export const ActionButton = styled.button`
  background-color: ${({$backgroundColor}) => $backgroundColor};
  color: white;
  cursor: pointer;
  word-break: keep-all;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`
export default TodoItem