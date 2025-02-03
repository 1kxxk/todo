import React from 'react'

const TodoForm = ({handleSubmit, text, setText}) => {
  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button>제출하기</button>
      </form>
  )
}

export default TodoForm