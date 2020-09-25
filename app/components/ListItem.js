import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const ListItem = ({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "tomato",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListItem;
