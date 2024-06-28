import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  align-items: center;
  font-size: 17px;
  width: 50%;
`;

const Title = styled("p")`
  margin: 0 2rem;
`;
const Logo = styled("div")`
display: flex;
justify-content: center;
align-items: center;
font-size: 28px;
font-weight: 800;
width: 33px;
border-radius: 50%;
color: #D9BEB8;
box-shadow: 0 4px 8px white;

`;

const Titles = ["War", "Trending", "Cartoon", "Top"];

const FirstSection = () => {
  return (
    <Container>
      <Logo>M</Logo>
      {Titles.map((el) => (
        <Title key={el}>{el}</Title>
      ))}
      
    </Container>
  );
};

export default FirstSection;
