import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [gameRounds, setGameRounds] = useState(0);

  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  function updateGameRounds(rounds) {
    setGameRounds(rounds);
  }

  function handNewGame() {
    console.log("reseting the game");
    setUserNumber(null);
    setGameRounds(0);
    setGameOver(true);
  }

  let screen = <HomeScreen onPickedNumber={startGameHandler} />;

  if (userNumber && !gameOver) {
    screen = (
      <GameScreen
        secret={userNumber}
        secretHandler={startGameHandler}
        gameOverHandler={setGameOver}
        updateGameRounds={updateGameRounds}
      />
    );
  } else if (gameOver && userNumber) {
    // show the game over screen
    console.log(gameOver, userNumber);
    screen = (
      <GameOver
        rounds={gameRounds}
        secret={userNumber}
        onStartNewGame={handNewGame}
      />
    );
  }
  useEffect(() => {
    setGameOver(false);
  }, [userNumber]);

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={style.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/samedice.jpg")}
        resizeMode="cover"
        style={style.rootScreen}
        imageStyle={style.imageBacground}
      >
        <SafeAreaView style={style.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  imageBacground: {
    opacity: 0.25,
  },
});
