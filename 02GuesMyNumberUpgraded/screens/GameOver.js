import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import CustomButton from "../components/ui/CustomButton";
import { setStatusBarStyle } from "expo-status-bar";
import Colors from "../constants/colors";

function GameOver({ rounds, secret, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.title}>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.mainText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{secret}</Text>
      </Text>
      <CustomButton
        style={styles.button}
        buttonText="Back to Home"
        onPress={onStartNewGame}
      />
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    marginBottom: 30,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: Colors.primary600,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  mainText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 30,
    color: "white",
  },

  highlight: {
    color: Colors.primary600,
  },

  button: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary600,
    marginTop: 10,
  },
});
