import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial() {
  return(
    <View style={[styles.centralizado, {gap:10}]}>
      <Text>Tela Inicial</Text>
      <Botao onPress={() => null}>
        <Link href="/stack/nova" style={{color: '#fff'}}>
          Ir para tela Nova
        </Link>
      </Botao>
      <Botao onPress={() => null}>
        <Link href="/" style={{color: '#fff'}}>
          Ir para Início
        </Link>
      </Botao>
    </View>
  )
}