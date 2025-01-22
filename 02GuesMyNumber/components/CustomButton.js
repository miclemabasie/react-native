import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const CustomButton = ({
  onPress,
  title = "Button", // Default button title
  backgroundColor = "#6200ee", // Default background color
  textColor = "#d1b6d0", // Default text color
  borderRadius = 8, // Default border radius
  padding = 10, // Default padding
  style = {}, // Additional styles
}) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor, borderRadius, padding },
          pressed && styles.pressed, // Add a pressed state effect
          style, // Allow overriding styles via props
        ]}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </Pressable>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7, // Button fades slightly when pressed
  },
});
