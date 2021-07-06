import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../api";

export default () => {
  // const [nowPlaying, setNowPlaying] = useState({
  //   movies: [],
  //   error: null,
  // });
  const getData = async () => {
    const [nowPlaying, error] = await movieApi.nowPlaying();
    console.log(nowPlaying, error);
    const [popular, popularError] = await movieApi.popular();
  };
  // getAnything으로 한번에 모든 함수 통과시킨다
  //  try{
  //   const { data: {results} } = await movieApi.nowPlaying();
  //   setNowPlaying({
  //     movies: results,
  //     error: null
  //   })
  //  }catch(error){
  //   setNowPlaying({
  //     error
  //   })
  //  }
  //};
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text>Movies</Text>
    </View>
  );
};
