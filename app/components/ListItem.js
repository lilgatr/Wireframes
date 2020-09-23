import React from "react";
import { View, Text } from "react-native";

export default (title, body) => (
  <View>
    <Text>{title}</Text>
    <Text>{body}</Text>
  </View>
);
