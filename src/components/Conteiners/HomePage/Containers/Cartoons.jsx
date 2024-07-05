import React, { useState, useEffect } from "react";
import MovieCard from "../../../Cards/MovieCard";
import styled from "styled-components";
import axios from "axios";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const HomPagesDefolt = () => {
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    axios.get("https://jk-tv.netlify.app/cartoons/get_all")
      .then((response) => {
        setCartoons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container>
      {cartoons.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Container>
  );
};

export default HomPagesDefolt;
