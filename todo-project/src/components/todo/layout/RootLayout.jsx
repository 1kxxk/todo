import React from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'

const RootLayout = () => {
  return (
    <MainContainer>
        <MainContent><Outlet/></MainContent>
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