import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const DailogBox = ({}) => {
  return (
    <View style={style.inputContainer}>
      <Text style={style.label}>Higher or Lower?</Text>

      <View style={style.btnContainer}>
        <View>
          <CustomButton title="-" style={style.btn} />
        </View>
        <View>
          <CustomButton title="+" style={style.btn} />
        </View>
      </View>
    </View>
  );
};

export default DailogBox;

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

  btnContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  btn: {
    paddingHorizontal: 30,
  },
});
