import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Banner({ text }) {
  return (
    <View style={style.banner}>
      <Text style={style.bannerText}>{text}</Text>
    </View>
  );
}

export default Banner;

const style = new StyleSheet.create({
  banner: {
    marginTop: 50,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    color: "white",
  },

  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
