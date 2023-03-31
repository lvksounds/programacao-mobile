import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 0,
    flexDirection: "column",
    padding: 10,
    marginLeft: 20,
    marginRight:20
  },
  container: {
    flex: 0,
    flexDirection: 'row',
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  title: {
    flex: 0,
    flexDirection: 'row',
    alignContent: "center",
    marginLeft: 2,
  },
  to: {
    color: "#A013DB",
    fontSize: 40
  },
  do: {
    color: "#1d9bf0",
    fontSize: 40
  },
  inputDiv: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0,
    flexDirection: "row",
    gap: 5
  },
  input: {
    width: 300,
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
    width: 60,
    
    justifyContent: "center",
    alignItems: "center"
  },
})