import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ComputerGuess = ({ value }) => {
  return (
    <View style={style.guessContainer}>
      <Text style={style.guess}>{value}</Text>
    </View>
  );
};

export default ComputerGuess;

const style = StyleSheet.create({
  guessContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: "#c21dbc",
    borderRadius: 10,
  },

  guess: {
    justifyContent: "center",
    color: "#c21dbc",
    fontSize: 25,
    fontWeight: "900",
    paddingHorizontal: 75,
  },
});
