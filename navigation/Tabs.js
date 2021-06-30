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
  //   useEffect(() => {
  //     navigation.setOptions({ title: "Hello from the Tabs" });
  //   }, []);

  const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";
  //route prop 우리가 어디있는지 알려줌
  //layoutEffect은 useEffect와 비슷한데 레이아웃 변경이 다 끝난 후에 작동한다는 차이점
  useEffect(() => {
    navigation.setOptions({ title: routeName });
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
