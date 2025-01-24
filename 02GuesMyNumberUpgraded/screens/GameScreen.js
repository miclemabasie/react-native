import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

function GameScreen({}) {
  function handleHigher() {
    console.log("Higher");
  }

  function handleLower() {
    console.log("Lower");
  }
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Oponnent's Guess</Title>
      <View style={styles.dailogBox}>
        <Text style={styles.dailogText}>Higher or Lower?</Text>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={handleLower}
            style={[styles.button, styles.lowerButton]}
            buttonText="Lower"
          />
          <CustomButton
            onPress={handleHigher}
            style={[styles.button, styles.higherButton]}
            buttonText="Higher"
          />
        </View>
      </View>

      <Text>Opponent's LOGS</Text>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    marginTop: 60,
  },

  dailogBox: {
    marginHorizontal: 30,
    paddingVertical: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3d021f",
    borderRadius: 10,
  },

  dailogText: {
    color: "#ddb52f",
    fontSize: 20,
    marginBottom: 6,
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  lowerButton: {
    backgroundColor: "#5c3232",
  },

  higherButton: {
    backgroundColor: "#3b6e22",
  },
});
