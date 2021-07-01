import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  const [nowPlaying, setNowPlaying] = useState({
    movies: [],
    error: null,
  });
  const getData = async () => {
    const { data, ...rest } = await movieApi.nowPlaying();
    console.log(rest);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>Movies</Text>
    </View>
  );
};
