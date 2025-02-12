import React from 'react'
import styled from 'styled-components'

const RootLayout = ({children}) => {
  return (
    <MainContainer>
        <MainContent>{children}</MainContent>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    min-height: 100vh;
    min-width: 100vh;
`
const MainContent = styled.div`
    max-width: 768px;
    margin: 0 auto;
    padding: 1rem;
`
export default RootLayout