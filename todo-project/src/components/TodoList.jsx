import TodoItem from './todo/TodoItem';

const TodoList = ({todos, handleCompleted, handleDelete}) => {

  return (
      <ul>
        {todos.map((todo)=>(
          <TodoItem key={todo.id} todo={todo} handleCompleted={handleCompleted} handleDelete={handleDelete}/>
    ))}
    </ul>
  )
}

export default TodoList