import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 0,
    flexDirection: "column",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 0,
    flexDirection: "row",
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    gap: 10,
    marginLeft: 10,
  },
  to: {
    color: "#A013DB",
    fontSize: 40,
  },
  do: {
    color: "#1d9bf0",
    fontSize: 40,
  },
  inputDiv: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    flexDirection: "row",
    gap: 5,
  },
  input: {
    width: "80%",
    padding: 18,
    backgroundColor: "#1F1E25",
    borderRadius: 4,
    color: "#fff",
    fontSize: 18,
  },
  addBtn: {
    backgroundColor: "#A013DB",
    borderRadius: 4,
    height: 62,
    width: "20%",

    justifyContent: "center",
    alignItems: "center",
  },
  statusDiv: {
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 0,
    flexDirection: "row",
    gap: 5,
  },
  createStatusDiv: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 4,
  },
  doneStatusDiv: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 4,
  },
  tasklist: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});
