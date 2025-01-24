import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ buttonText, style, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});
