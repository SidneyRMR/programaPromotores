import Botao from '../components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from 'expo-router'
import { Drawer } from 'expo-router/drawer';
import { DrawerActions } from '@react-navigation/native';

export default function TelaInicial() {
  const nav = useNavigation()
  return (
    <View style={[styles.centralizado, { gap:10 }]}>
      <Ionicons name="logo-react" size={100} />
      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 20, fontWeight: 700}}>MasterClass React Native</Text>
        <Text style={{fontSize: 16}}>Esquenta Formação.dev</Text>
      </View>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
        <Text style={{color:'#fff'}}>Exercicios</Text>
      </Botao>
    </View>
  )
}