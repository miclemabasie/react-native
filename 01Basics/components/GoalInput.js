import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({
  goalInputHangler,
  addGoHandler,
  value,
  showModal,
  changeModal,
}) {
  function closeModal() {
    changeModal(!showModal);
  }
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goals.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          onChangeText={goalInputHangler}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonElelment}>
            <Button title="Submit" color="#5e0acc" onPress={addGoHandler} />
          </View>

          <View style={styles.buttonElelment}>
            <Button title="Cancel" color="#f31282" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  textInput: {
    padding: 20,
    width: "90%",
    marginBottom: 20,
    color: "#120438",
    borderRadius: 10,
    borderColor: "#e4f0ff",
    backgroundColor: "#e4d0ff",
    fontSize: 18,
  },

  buttonContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },

  buttonElelment: {
    flex: 1,
    marginHorizontal: 8,
  },
  goalsContainer: {
    flex: 4,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
