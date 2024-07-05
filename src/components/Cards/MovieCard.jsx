import React from "react";
import { BsJustify } from "react-icons/bs";
import { Card, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled("div")`
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <StyledCard
      style={{
        width: "19rem",
        height: "100%",
        border: "2px solid #0D0000",
        borderRadius: "3px",
        color: "white",
      }}
    >
      <CardBody>
        <CardTitle className="mb-3 text-center" tag="h6">
          {movie.title}
        </CardTitle>
      </CardBody>
      <img alt="Card cap" src={movie.backdropPath} width="100%" />
      <CardBody></CardBody>
    </StyledCard>
  );
};

export default MovieCard;
