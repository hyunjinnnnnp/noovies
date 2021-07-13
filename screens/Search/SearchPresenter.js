import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <Container contentContainerStyle={{ paddingTop: 10 }}>
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie Results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"TV Results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            overview={show.overview}
            releaseDate={show.release_date}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </Container>
);
