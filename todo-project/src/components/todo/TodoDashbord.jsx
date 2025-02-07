import { ClipboardCheck, LaptopMinimal, Video } from 'lucide-react'
import React from 'react'
import styled from 'styled-components'

const TodoDashbord = () => {
  return (
    <TodoDashbordSection>
      <TodoDashbordHeader>
        Quick Access
      </TodoDashbordHeader>
      <TodoDashbordCardList>
        <TodoDashbordCardWrapper $flex={2}>
          <TodoDashbordCard>
            <div>
            <ClipboardCheck/>
            </div>
            <TodoDashbordCardContent>
              16 <br /> <span>All Tasks</span>
            </TodoDashbordCardContent>
          </TodoDashbordCard>
        </TodoDashbordCardWrapper>
        <TodoDashbordCardWrapper $flex={1}>
          <TodoDashbordCard $backgroundcolor='#582be6'>
            <div>
            <LaptopMinimal/>
            </div>
            <TodoDashbordCardContent>
            5 <br /> <span>Completed Tasks</span> 
            </TodoDashbordCardContent>
          </TodoDashbordCard>
        </TodoDashbordCardWrapper>
        <TodoDashbordCardWrapper $flex={1}>
          <TodoDashbordCard $backgroundcolor='#242424'>
            <div>
            <Video/>
            </div>
            <TodoDashbordCardContent>
              11 <br /> <span>Todo Tasks</span>
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

const TodoDashbordCard = styled.button`
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