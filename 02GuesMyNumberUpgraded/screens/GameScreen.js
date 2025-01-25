import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContent from "../components/game/NumberContent";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/GuessLogItem";

// Function to generate a random number between min and max, excluding a specific number
function generateNumber(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  } while (randomNumber === exclude); // Keep generating until it's not equal to exclude

  return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({
  secret,
  secretHandler,
  gameOverHandler,
  updateGameRounds,
}) {
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(1, 100, secret)
  );
  const [guesses, setGuesses] = useState([]);

  // Function to reset the game and boundaries
  function handleGameReturn() {
    minBoundary = 1; // Reset to initial value
    maxBoundary = 100; // Reset to initial value
    gameOverHandler(true);
    updateGameRounds(guesses.length);
  }

  useEffect(() => {
    setGuesses((prevGuesses) => [...prevGuesses, currentGuess]);
  }, [currentGuess]);

  // Handle the next guess based on user's feedback
  function handleNextGuess(direction) {
    if (minBoundary >= maxBoundary) {
      Alert.alert("Game Over", "There are no more valid guesses possible!", [
        { text: "Restart", onPress: handleGameReturn },
      ]);
      return;
    }

    if (direction === "lower") {
      // Validate that the guess is logical
      if (currentGuess <= secret) {
        Alert.alert("Liar!", "Your number isn't lower!", [
          { text: "Continue" },
        ]);
        return;
      }
      maxBoundary = currentGuess; // Update the maximum boundary
    } else if (direction === "greater") {
      if (currentGuess >= secret) {
        Alert.alert("Liar!", "Your number isn't higher!", [
          { text: "Continue" },
        ]);
        return;
      }
      minBoundary = currentGuess + 1; // Update the minimum boundary
    }

    // Generate the next guess and update the state
    const nextGuess = generateNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(nextGuess);
  }

  // Effect to check if the current guess matches the secret number
  useEffect(() => {
    if (currentGuess === secret) {
      handleGameReturn();
    }
  }, [currentGuess, secret]);

  console.log(guesses);

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContent>{currentGuess}</NumberContent>
      <View style={styles.dialogBox}>
        <Text style={styles.dialogText}>Higher or Lower?</Text>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={() => handleNextGuess("lower")}
            style={[styles.button, styles.lowerButton]}
            buttonText={<Ionicons name="remove" size={24} color="white" />}
          />
          <CustomButton
            onPress={() => handleNextGuess("greater")}
            style={[styles.button, styles.higherButton]}
            buttonText={<Ionicons name="add" size={24} color="white" />}
          />
        </View>
      </View>

      <View style={styles.logItems}>
        <FlatList
          data={guesses}
          renderItem={(dataItem) => (
            <GuessLogItem
              guess={dataItem.item}
              roundNumber={dataItem.index + 1}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

// Styles
const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  dialogBox: {
    marginTop: 20,
    backgroundColor: Colors.primary600,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  dialogText: {
    color: Colors.accent500,
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "open-sans",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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

  logItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    padding: 10,
  },
});
