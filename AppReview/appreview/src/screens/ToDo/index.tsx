import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 



export default function Home() {
  return(
    <View style={styles.main}>
      <View style={styles.container}>
      <FontAwesome5 name="tasks" size={40} color="#1d9bf0" />
        <View style={styles.title}>
          <Text style={styles.to}>to</Text>
          <Text style={styles.do}>do</Text>
        </View>
    </View>
    <View style={styles.inputDiv}>
    <TextInput
        style={styles.input}
        placeholder="Adicione uma Tarefa"
        placeholderTextColor={"#6d6d6d"}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.addBtn}>
      <Ionicons name="add-circle-outline" size={24} color="white" />
      </TouchableOpacity>
      </View>
    </View>
    
  )
}