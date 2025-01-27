import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  const onPressing = (title, color) => {
    console.log("I was pressed", title, color);
  };

  console.log("name:", title);
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPressing.bind(this, title, color)}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    minHeight: 150,
    borderRadius: 8,
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.8,
  },

  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
    height: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
