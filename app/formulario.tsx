import styles from "@/constants/styles";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function TelaFormulario() {

  const [usuario, setUsuario] = useState<any>({})
  const [erros, setErros] = useState<any>({nome: 'Nome está inválido'})
  
  return(
    <View style={styles.centralizado}>
      <Text>Formulário</Text>
      <TextInput 
        placeholder="Nome" 
        value={usuario.nome ?? ''} 
        style={[styles.input, erros.nome && styles.inputError]}
        onChangeText={(nome) => setUsuario({ ...usuario, nome})}>
      </TextInput>
    </View>
  )
}