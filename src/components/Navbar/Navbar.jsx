import React from 'react'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import styled from 'styled-components'

const Container = styled ('div')`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 3rem;
height: 3rem;
Background-color: #261C1C;
color: #C7FFED;
`

const NavbarContainer = () => {
  return (
    <Container>
        <FirstSection/>
        <SecondSection/>
    </Container>
  )
}

export default NavbarContainer;