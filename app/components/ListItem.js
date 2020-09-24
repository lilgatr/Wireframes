import React from "react";
import { View, Text } from "react-native";

const Item = ({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
);

export default Item;
