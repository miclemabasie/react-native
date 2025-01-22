import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ComputerGuess from "./components/ComputerGuess";
import InputBox from "./components/InputBox";
import DailogBox from "./components/DailogBox";
import GuessItem from "./components/GuessItem";

export default function App() {
  const [secret, setSecret] = useState(null); // The user's secret number
  const [newGuess, setNewGuess] = useState(0); // The computer's current guess
  const [guessCount, setGuessCount] = useState(0); // Number of guesses made
  const [guesses, setGuesses] = useState([]); // List of all guesses
  const [enterGuess, setEnterGuess] = useState(true); // Toggle input/game screen
  const [bannerText, setBannerText] = useState("Guess  y Number"); // Banner text
  const [min, setMin] = useState(1); // Minimum bound for guessing
  const [max, setMax] = useState(100); // Maximum bound for guessing
  const [playing, setPlaying] = useState(true); // Maximum bound for guessing

  // Helper to generate a random integer in a given range
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up
    max = Math.floor(max); // Round down
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to start the game after user sets their secret number
  function startGame(secretNumber) {
    setSecret(secretNumber); // Save the user's secret number
    setBannerText("Opponent's Guess"); // Update the banner
    setEnterGuess(false); // Switch to game screen
    const initialGuess = getRandomInt(min, max); // Generate the first guess
    makeGuess(initialGuess); // Start the guessing process
  }

  // Make a guess and update the state
  function makeGuess(guess) {
    setNewGuess(guess);
    setGuessCount((prevCount) => prevCount + 1);
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      { id: prevGuesses.length + 1, value: guess },
    ]);
  }

  // Handle a "Too Low" response
  function handleLowGuess() {
    setMin((prevMin) => {
      const updatedMin = newGuess + 1; // Exclude the current guess
      const nextGuess = generateNewGuess(updatedMin, max);
      makeGuess(nextGuess);
      return updatedMin; // Update state
    });
  }

  // Handle a "Too High" response
  function handleHighGuess() {
    setMax((prevMax) => {
      const updatedMax = newGuess - 1; // Exclude the current guess
      const nextGuess = generateNewGuess(min, updatedMax);
      makeGuess(nextGuess);
      return updatedMax; // Update state
    });
  }

  // Generate a new guess within the range, avoiding duplicates
  function generateNewGuess(min, max) {
    let guess;
    do {
      guess = getRandomInt(min, max);
    } while (guesses.some((g) => g.value === guess)); // Ensure guess isn't repeated
    return guess;
  }

  // React when the computer's guess matches the secret number
  useEffect(() => {
    if (!enterGuess && newGuess === secret) {
      setBannerText("You won!");
      // remove the play state
      setPlaying((playing) => {
        playing = !playing;
      });
    }
  }, [newGuess, secret, enterGuess]);

  return (
    <View style={styles.container}>
      <Banner text={bannerText} />

      {enterGuess ? (
        <InputBox
          handleSecretOnChange={(text) => setSecret(Number(text))} // Save the secret number
          onPressConfirm={() => startGame(secret)} // Start the game
        />
      ) : (
        <>
          <ComputerGuess value={newGuess} />
          {playing ? (
            <DailogBox
              handleHighGuess={handleHighGuess}
              handleLowGuess={handleLowGuess}
            />
          ) : (
            <Text>You won</Text>
          )}
        </>
      )}

      <FlatList
        data={guesses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <GuessItem guess={item.value} guessCount={index + 1} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
  },
});
