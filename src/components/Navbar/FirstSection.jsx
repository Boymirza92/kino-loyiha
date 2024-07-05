import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
  display: flex;
  align-items: center;
  font-size: 17px;
  width: 50%;
`;

const Title = styled("p")`
  margin: 0 2rem;
  cursor: pointer;
`;
const Logo = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  width: 67px;
  border-radius: 50%;
  color: #d9beb8;
  box-shadow: 0 4px 8px white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  text-shadow: 0 0 10px #0f0, 0 0 40px #0f0;
  font-family: "Arial", sans-serif;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.5);
    background-color: #402637;
  }
`;

const Titles = ["War", "Trending", "Cartoons", "Top"];

const FirstSection = () => {
  const navigate = useNavigate();
  const handleTitleClick = (el) => {
    navigate(el.toLowerCase());
  };
  return (
    <Container>
      <Logo onClick={() => handleTitleClick("/")}>M</Logo>
      {Titles.map((el) => (
        <Title onClick={() => handleTitleClick(el)} key={el}>
          {el}
        </Title>
      ))}
    </Container>
  );
};

export default FirstSection;
