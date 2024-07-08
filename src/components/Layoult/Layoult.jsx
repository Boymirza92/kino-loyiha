import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Container = styled("div")`
background-color: #343a40; 
`;
const ChildrinContainer = styled('div')`
padding: 2rem;
`

const BasicLayout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <ChildrinContainer>
      {children}
      </ChildrinContainer>
      <Footer />
    </Container>
  );
};

export default BasicLayout;
