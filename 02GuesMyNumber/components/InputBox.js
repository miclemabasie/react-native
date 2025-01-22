import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const InputBox = ({ handleSecretOnChange, onPressConfirm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text); // Update the local state
    handleSecretOnChange(parseInt(text, 10)); // Pass the number to the parent handler
  };

  const handleReset = () => {
    setInputValue(""); // Clear the local state
    handleSecretOnChange(0); // Reset the secret number
  };

  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>Enter a number:</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric" // Ensures only numbers can be entered
        placeholder="Type here"
        placeholderTextColor="#aaa"
        value={inputValue} // Controlled input
        onChangeText={handleInputChange} // Handle input changes
      />

      <View style={style.btnContainer}>
        <View>
          <CustomButton title="Reset" onPress={handleReset} />
        </View>
        <View>
          <CustomButton
            title="Confirm"
            onPress={() => onPressConfirm(parseInt(inputValue, 10))}
          />
        </View>
      </View>
    </View>
  );
};

export default InputBox;

const style = StyleSheet.create({
  inputContainer: {
    width: 250,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#382237",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff", // Text color
    fontSize: 16,
    textAlign: "center", // Center the text input
  },
  btnContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
