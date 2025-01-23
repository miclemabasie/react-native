import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

function GoalItem({ data, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddddd" }}
        onPress={onDelete.bind(this, data.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#d234eb",

    marginBottom: 20,
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
