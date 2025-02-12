import TodoForm from './TodoForm';
import TodoList from '../TodoList';
import styled from 'styled-components';
import TodoDashbord from './TodoDashbord';

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      <TodoList/>
      <TodoForm/>
    </TodoContainerWrapper>
  )
}

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export default TodoContainer