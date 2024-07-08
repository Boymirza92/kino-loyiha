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

const FantasyMovies = () => {
  const [fantasyMovies, setFantasyMovies] = useState([]);

  useEffect(() => {
    axios.get("https://jk-tv.netlify.app/fantasy_movies/get_all")
      .then((response) => {
        setFantasyMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <Container>
      {fantasyMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Container>
  );
};

export default FantasyMovies;
