import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import { trimText, formatDate } from "../utils";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.Text`
  color: white;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: white;
  margin-top: 10px;
`;

const Horizontal = ({
  id,
  title,
  poster,
  overview,
  releaseDate,
  votes,
  firstAirDate,
}) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        {releaseDate ? <Info>{formatDate(releaseDate)}</Info> : null}
        {votes ? <Info>{`⭐️ ${votes}/10`}</Info> : null}
        {firstAirDate ? (
          <Info>{`방영 시작일: ${formatDate(firstAirDate)}`}</Info>
        ) : null}
        <Overview>{trimText(overview, 130)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.proptypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  votes: PropTypes.number,
};

export default Horizontal;
