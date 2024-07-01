import React from 'react'
import styled from 'styled-components';

const Container = styled("div")`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 15rem;
background-color: #0D0D0D;
color: #F2E7DC
`

const Footer = () => {
  return (
    <Container>FooterContainer</Container>
  )
};
export default Footer;