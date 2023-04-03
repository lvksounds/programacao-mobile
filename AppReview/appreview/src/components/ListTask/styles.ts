import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    width: "100%",
    marginTop: 10,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 4,
    gap: 4,
  },

  taskDone: {
    textDecorationLine: "line-through",
    color: "#858685",
    width: "80%",
  },
  taskUndone: {
    color: "#fffc",
    width: "80%",
  },
});
