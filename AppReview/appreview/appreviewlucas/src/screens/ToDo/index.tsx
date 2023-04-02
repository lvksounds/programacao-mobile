import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ListTask from "../../components/ListTask";
import { useState } from "react";



export default function Home() {
  const tarefas = [
    {id: '1', text: 'prova da disciplina de Programação Mobile I '},
    {id: '2', text: 'Aula da disciplina de PM'},
    {id: '3', text: 'Configurar o notebook para desenvolvimento'},
    {id: '4', text: 'Trabalho da disciplina do banco de dados'}
]

  function handleRemoveTask(index: string) {
    console.log("apagou")
    tarefas.filter(item => item.id !== index);
  }
  //const [listState, setListaState] = useState([])

  return(
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
        />

        <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusDiv}>
        <View style={styles.createStatusDiv}>
          <Text style={{color: "#A013DB", fontSize: 23, fontWeight: "bold"}}>Criadas: </Text>
          <Text style={{color: "#008100", fontSize: 23, fontWeight: "bold"}}>5</Text>
        </View>
        <View style={styles.doneStatusDiv}>
          <Text style={{color: "#1d9bf0", fontSize: 23, fontWeight: "bold"}}>Concluídas: </Text>
          <Text style={{color: "#008100", fontSize: 23, fontWeight: "bold"}}>2</Text>
        </View>
      </View>

      <View style={styles.tasklist}>
      { <FlatList 
          data={tarefas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
              <ListTask
                  id={item.id} 
                  task={item.text}
                  onRemove={() => handleRemoveTask(item.id)}/>
          )} showsVerticalScrollIndicator={false}>
      </FlatList> 
      }
      </View>
    </View>
    
  )
}