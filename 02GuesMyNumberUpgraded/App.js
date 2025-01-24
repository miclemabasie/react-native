import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(selectedNumber) {
    console.log("this is the selected", selectedNumber);
    setUserNumber(selectedNumber);
  }

  let screen = <HomeScreen onPickedNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={style.rootScreen}>
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
