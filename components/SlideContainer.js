import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const { height: HEIGHT } = Dimensions.get("window");
const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 40px;
`;

export default ({ children }) => (
  <SliderContainer>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swiper>
  </SliderContainer>
);
