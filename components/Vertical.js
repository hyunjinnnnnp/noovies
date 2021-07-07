import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { apiImage } from "../api";
import Votes from "./Votes";
import Poster from "./Poster";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px 10px;
`;

const Vertical = ({ poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={apiImage(poster)} />
      <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
