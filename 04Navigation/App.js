import { StyleSheet, StatusBar, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <CategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Ensure the background complements the light status bar
  },
});
