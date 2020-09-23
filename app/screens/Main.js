import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <View>
      <Text>Howdy</Text>
      <StatusBar sytle="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
