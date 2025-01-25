import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuessLogItem = ({ guess, roundNumber }) => {
  return (
    <View style={styles.logContainer}>
      <Text style={styles.logText}>{`#${roundNumber}`}</Text>
      <Text>{`Opponent's guess: ${guess}`}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  logContainer: {
    flex: 1,
    borderWidth: 3,
    borderColor: Colors.primary600,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: "100%",
    textAlign: "center",
    marginTop: 10,
    borderRadius: 20,
  },
});
