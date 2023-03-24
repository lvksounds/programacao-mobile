import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Home/styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.title}>
        Nome do Evento
      </Text>
      <Text key="2" style={styles.date}>
        Sexta-feira, 24 de Março de 2023
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6d6d6d"}
        autoCapitalize="characters"
      />

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
