import React from "react";
import { Card, CardBody, CardSubtitle } from "reactstrap";
import styled from "styled-components";

const StyledCard = styled("div")`
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MovieCard = () => {
  return (
    <StyledCard
      style={{
        width: "19rem",
        height: "100%",
        border: "2px solid #0D0000",
        borderRadius: "3px",
        color: "white"
      }}
    >
      <CardBody>
        <CardSubtitle className="mb-2 text-center" tag="h6">
          Card subtitle
        </CardSubtitle>
      </CardBody>
      <img alt="Card cap" src="https://picsum.photos/318/180" width="100%" />
      <CardBody></CardBody>
    </StyledCard>
  );
};

export default MovieCard;
