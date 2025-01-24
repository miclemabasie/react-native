import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#ddb52f",
    marginBottom: 6,
    borderWidth: 2,
    marginHorizontal: 60,
    textAlign: "center",
    paddingVertical: 10,
    borderColor: "#ddb52f",
  },
});
