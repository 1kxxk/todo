import { ClipboardCheck, LaptopMinimal, Video } from 'lucide-react'
import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router'
import styled from 'styled-components'
import { TodoContext } from '../../context/TodoContext'

const TodoDashbord = () => {
  const {todos} = useContext(TodoContext)
  const [searchParams] = useSearchParams()

  const all = todos.length
  const completed = todos.filter((todo)=>todo.completed).length
  const pening = all - completed;
  
  const selectedFilter = searchParams.get('filter')
  return (
    <TodoDashbordSection>
      <TodoDashbordHeader>
        Quick Access
      </TodoDashbordHeader>
      <TodoDashbordCardList>
        <TodoDashbordCardWrapper $flex={2}>
          <TodoDashbordCard to='/' $selected={!selectedFilter}>
            <div>
            <ClipboardCheck/>
            </div>
            <TodoDashbordCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashbordCardContent>
          </TodoDashbordCard>
        </TodoDashbordCardWrapper>
        <TodoDashbordCardWrapper $flex={1}>
          <TodoDashbordCard to='?filter=completed' $selected={selectedFilter === 'completed'} $backgroundcolor='#582be6'>
            <div>
            <LaptopMinimal/>
            </div>
            <TodoDashbordCardContent>
            {completed} <br /> <span>Completed Tasks</span> 
            </TodoDashbordCardContent>
          </TodoDashbordCard>
        </TodoDashbordCardWrapper>
        <TodoDashbordCardWrapper $flex={1}>
          <TodoDashbordCard to='?filter=pending' $selected={selectedFilter === 'pending'} $backgroundcolor='#242424'>
            <div>
            <Video/>
            </div>
            <TodoDashbordCardContent>
              {pening} <br /> <span>Todo Tasks</span>
            </TodoDashbordCardContent>
          </TodoDashbordCard>
        </TodoDashbordCardWrapper>
      </TodoDashbordCardList>
    </TodoDashbordSection>
  )
}

const TodoDashbordSection = styled.section`
`

const TodoDashbordHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const TodoDashbordCardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`

const TodoDashbordCardWrapper = styled.li`
  flex:${({$flex=1})=>$flex};
`

const TodoDashbordCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  background-color: ${({$backgroundcolor = '#e6582b'})=> $backgroundcolor};
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: ${({$selected})=>($selected?'underline':'none')};
`

const TodoDashbordCardContent = styled.p`
  font-size: 1rem;
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`
export default TodoDashbord