import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import DATA from "../utils/Data";

export default () => {
  const renderListItem = (item) => (
    <ListItem title={item.title} body={item.body} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "red",
  },
  title: {
    fontSize: 20,
  },
});
