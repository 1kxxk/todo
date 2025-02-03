import React from 'react'

const TodoItem = ({todo, handleCompleted, handleDelete}) => {
  return (
    <li style={{
        textDecoration: todo.completed ? 'line-through': 'none'
      }}>
          {todo.text}
          <button onClick={()=>handleCompleted(todo.id)}>
            {todo.completed?'취소하기':'완료하기'}
          </button>
          <button onClick={()=>handleDelete(todo.id)}>
            삭제하기
          </button>
      </li>
  )
}

export default TodoItem