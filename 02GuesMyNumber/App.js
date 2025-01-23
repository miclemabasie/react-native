import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ComputerGuess from "./components/ComputerGuess";
import InputBox from "./components/InputBox";
import DailogBox from "./components/DailogBox";
import GuessItem from "./components/GuessItem";

export default function App() {
  const [secret, setSecret] = useState(null);
  const [newGuess, setNewGuess] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [enterGuess, setEnterGuess] = useState(true);
  const [bannerText, setBannerText] = useState("Guess  y Number");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [playing, setPlaying] = useState(true);

  // Helper to generate a random integer in a given range
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up
    max = Math.floor(max); // Round down
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startGame(secretNumber) {
    setSecret(secretNumber);
    setBannerText("Opponent's Guess");
    setEnterGuess(false);
    const initialGuess = getRandomInt(min, max);
    makeGuess(initialGuess);
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
      const updatedMin = newGuess + 1;
      const nextGuess = generateNewGuess(updatedMin, max);
      makeGuess(nextGuess);
      return updatedMin;
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

  function generateNewGuess(min, max) {
    let guess;
    do {
      guess = getRandomInt(min, max);
    } while (guesses.some((g) => g.value === guess)); // Ensure guess isn't repeated
    return guess;
  }

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
      {playing && <Banner text={bannerText} />}

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
            <Banner
              text={`You guess the number: ${secret} in ${guessCount} trials.`}
            />
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
