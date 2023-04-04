import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Task,
} from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ListTask from "../../components/ListTask";
import { useEffect, useState } from "react";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  const [taskList, setTaskList] = useState<
    { id: string; text: string; isDone: boolean }[]
  >([]);

  const [doneTasks, setDoneTask] = useState(0);

  function handleRemoveTask(id: string) {
    setDoneTask(taskList.filter((item) => item.id !== id).length);
    return taskList.filter((item) => item.id !== id);
  }

  function handleDoneEvent(id: string) {
    taskList.forEach((task) => {
      if (task.id == id) task.isDone = !task.isDone;
    });
    return taskList.filter((task) => task.isDone === true).length;
  }

  useEffect(() => {});

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FontAwesome5 name="tasks" size={40} color="#1d9bf0" />
        <View style={styles.title}>
          <Text style={styles.to}>To</Text>
          <Text style={styles.do}>Do</Text>
        </View>
      </View>

      <View style={styles.inputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma Tarefa"
          placeholderTextColor={"#6d6d6d"}
          autoCapitalize="characters"
          onChangeText={(newtask) => setTaskText(newtask)}
          defaultValue={taskText}
        />

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            const newTask = {
              id: taskList.length.toString(),
              text: taskText,
              isDone: false,
            };
            setTaskList([...taskList, newTask]);
            setTaskText("");
          }}
        >
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusDiv}>
        <View style={styles.createStatusDiv}>
          <Text style={{ color: "#A013DB", fontSize: 20, fontWeight: "bold" }}>
            Criadas:
          </Text>
          <Text style={{ color: "#008100", fontSize: 20, fontWeight: "bold" }}>
            {taskList.length}
          </Text>
        </View>
        <View style={styles.doneStatusDiv}>
          <Text style={{ color: "#1d9bf0", fontSize: 20, fontWeight: "bold" }}>
            Concluídas:
          </Text>
          <Text style={{ color: "#008100", fontSize: 20, fontWeight: "bold" }}>
            {doneTasks}
          </Text>
        </View>
      </View>

      <View style={styles.tasklist}>
        {
          <FlatList
            data={taskList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListTask
                id={item.id}
                task={item.text}
                isDone={item.isDone}
                onRemove={() => setTaskList(handleRemoveTask(item.id))}
                onDone={() => setDoneTask(handleDoneEvent(item.id))}
              />
            )}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        }
      </View>
    </View>
  );
}
