import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <View>
      <Text>Movies</Text>
      <Button title="Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};
