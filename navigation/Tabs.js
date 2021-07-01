import React, { useEffect } from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  //Stack nav가 Tab nav에게 전달해주는 prop
  //이 prop을 통해 부모와 소통할 수 있음

  const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";
  useEffect(() => {
    navigation.setOptions({
      title: routeName,
      // headerStyle: {
      //   backgroundColor: routeName === "TV" ? "blue" : "white",
      // },
    });
  }, [route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Favourites" component={Favs} />
    </Tabs.Navigator>
  );
};
