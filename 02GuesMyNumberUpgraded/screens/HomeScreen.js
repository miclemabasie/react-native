import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { useState } from "react";
import Colors from "../constants/colors";

function HomeScreen({ onPickedNumber }) {
  const [secretValue, setSecretValue] = useState("");

  function resetSecretValue() {
    setSecretValue("");
  }

  function secretValueHandler(text) {
    // setSecretValue(text.replace(/[^0-9]/g, ""));
    setSecretValue(text);
  }

  function confirmSecretInputHandler() {
    const chosenNumber = parseInt(secretValue);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      // show alert
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetSecretValue,
        },
      ]);
      return;
    }
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputArea}>
      <Text style={styles.instructionText}>Enter a number</Text>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        maxLength={2}
        placeholderTextColor={Colors.accent500}
        value={secretValue}
        onChangeText={secretValueHandler}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          onPress={resetSecretValue}
          style={[styles.button, styles.resetButton]}
          buttonText="Reset"
        />
        <CustomButton
          onPress={confirmSecretInputHandler}
          style={[styles.button, styles.confirmButton]}
          buttonText="Confirm"
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },

  inputArea: {
    marginHorizontal: 30,
    marginTop: 80,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
    borderRadius: 10,
  },

  input: {
    width: 50,
    height: 50,
    marginBottom: 20,
    color: Colors.accent500,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: Colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
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

  resetButton: {
    backgroundColor: Colors.primary500,
  },

  confirmButton: {
    backgroundColor: Colors.secondaryBtn,
  },

  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
