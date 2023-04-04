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
  
  //const [doneTaskList, setDoneTask] = useState<{ id: string; text: string; isDone: boolean }[]>([]);

  function handleRemoveTask(index: string) {
    return taskList.filter((item) => item.id !== index);
  }

  useEffect(() => {
    
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <FontAwesome5 name="tasks" size={40} color="#1d9bf0" />
        <View style={styles.title}>
          <Text style={styles.to}>to </Text>
          <Text style={styles.do}>do</Text>
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
            { /*doneTaskList.length*/ }
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
                onRemove={() => setTaskList(handleRemoveTask(item.id))}
                //isDone={() => handleDoneTask(item.isDone)}
              />
            )}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        }
      </View>
    </View>
  );
}
