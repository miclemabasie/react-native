import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Banner from "./components/Banner";
import ComputerGuess from "./components/ComputerGuess";
import InputBox from "./components/InputBox";
import { useEffect, useState } from "react";
import DailogBox from "./components/DailogBox";
import GuessItem from "./components/GuessItem";

export default function App() {
  const [secret, setSecret] = useState();
  const [newGuess, setnewGuess] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [enterGuess, setEnterGuess] = useState(true);
  const [bannerText, setBannerText] = useState("Guess My Number");

  function addGuess() {
    setGuesses((currentGuesses) => [...currentGuesses, newGuess]);
  }

  function addSecret(e) {
    console.log(e);
    setSecret(e);
  }
  function opponentGameStart(e) {
    console.log("playing the game");
    setBannerText("Opponent's Guess");
    setEnterGuess(false);
    generateNumber();
  }

  function generateNumber() {
    const randomNumber = Math.ceil(Math.random() * 100);
    // update the screen
    setnewGuess(randomNumber);
    console.log(newGuess);
  }

  return (
    <View style={styles.container}>
      <Banner text={bannerText} />

      {enterGuess ? (
        <InputBox
          handleSecretOnChange={addSecret}
          onPressConfirm={opponentGameStart}
        />
      ) : (
        <>
          <ComputerGuess value={newGuess} />
          <DailogBox />
        </>
      )}

      {guesses.map((guess) => (
        <GuessItem key={guess} guess={guess} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    // justifyContent: "center",
  },
});
