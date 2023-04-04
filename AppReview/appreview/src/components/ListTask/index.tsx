import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  task: string;
  id: string;
  onRemove: () => void;
  isDone: boolean;
  onDone: () => void;
};

export default function ListTask(props: Props) {
  const [doneCheck, SetDoneCheck] = useState(false);

  function handleCheckPress() {
    props.onDone();
    SetDoneCheck(!doneCheck);
  }

  return (
    <View>
      <View style={styles.task}>
        <Ionicons
          name={doneCheck ? "radio-button-on" : "radio-button-off-sharp"}
          size={28}
          color="green"
          onPress={handleCheckPress}
        />
        <Text style={doneCheck ? styles.taskDone : styles.taskUndone}>
          {props.task}
        </Text>
        <Ionicons
          name="trash-outline"
          size={28}
          color="white"
          onPress={props.onRemove}
        />
      </View>
    </View>
  );
}
