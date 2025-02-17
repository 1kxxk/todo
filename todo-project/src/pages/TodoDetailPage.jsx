import React, { useContext } from 'react'
import { Link, useParams } from 'react-router'
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';

const TodoDetailPage = () => {
  const {todos} = useContext(TodoContext)
  const {id} = useParams();

  const targetTodoItem = todos.find((todo)=>todo.id===id);

  return (
    <DetailPageWrapper>
      {targetTodoItem ? <TodoItem todo={targetTodoItem}/> : <p>해당하는 데이터를 찾을 수 없습니다.</p>}
      <BackLink to='/'>
      <ActionButton $backgroundColor = '#242424'>
        돌아가기
      </ActionButton>
      </BackLink>
    </DetailPageWrapper>
  )
}

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

const BackLink = styled(Link)`
  button {
    width: 100%;
  }
`
export default TodoDetailPage