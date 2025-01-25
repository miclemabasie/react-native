import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContent({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContent;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 5,
    marginHorizontal: 50,
    marginTop: 20,
    padding: 10,
  },

  numberText: {
    color: Colors.accent500,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "open-sans-bold",
  },
});
