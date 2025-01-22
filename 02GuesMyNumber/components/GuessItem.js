import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GuessItem = ({ guess, guessCount }) => {
  return (
    <View style={style.guessItemContainer}>
      <Text style={style.guessText}>#{guessCount}</Text>
      <Text style={style.guessText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessItem;

const style = StyleSheet.create({
  guessItemContainer: {
    width: 250,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#e6cce4",
  },

  guessText: {
    color: "#210720",
  },
});
