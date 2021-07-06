import React, { useEffect } from "react";
import { Platform } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        //same as () => { return {} }

        tabBarIcon: ({ focused }) => {
          const icons = {
            Movies: "film",
            Discovery: "heart",
            Search: "search",
            TV: "tv-sharp",
          };
          return (
            <Ionicons
              name={`${Platform.OS === "ios" ? "ios" : "md"}-${
                icons[route.name]
              }`}
              color={focused ? "white" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
