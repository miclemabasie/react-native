import { useState } from "react";
import { Button, StyleSheet, View, FlatList, Image } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalText, setgoalText] = useState("");
  const [goals, setGoals] = useState([{ text: "Learing React", id: "32" }]);
  const [modalIsVisible, setmodalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setmodalIsVisible(!modalIsVisible);
  }

  function goalInputHangler(e) {
    setgoalText(e);
  }

  function addGoHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setgoalText("");
    setmodalIsVisible(!modalIsVisible);
  }

  function deleteGoalHandler(goalID) {
    // Delete goal with given ID
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginBottom: 20 }}>
          <Button
            title="Add New Goal"
            color="#d234eb"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          goalInputHangler={goalInputHangler}
          addGoHandler={addGoHandler}
          value={goalText}
          showModal={modalIsVisible}
          changeModal={setmodalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem data={itemData.item} onDelete={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },

  textInput: {
    width: "80%",
    marginRight: 8,
    padding: 10,
  },

  goalsContainer: {
    flex: 4,
  },

  goalItem: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#d234eb",

    marginBottom: 20,
  },

  goalText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
