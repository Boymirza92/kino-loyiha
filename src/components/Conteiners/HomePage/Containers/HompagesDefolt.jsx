import React, { useState } from "react";
import MovieCard from "../../../Cards/MovieCard";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
const HomPagesDefolt = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      {arr.map((movie, index) => {
        return <MovieCard key={index} />;
      })}
    </Container>
  );
};

export default HomPagesDefolt;
