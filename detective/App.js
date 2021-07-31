import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Server } from './connection/Server';
import { Client } from './connection/Client';


export default function App() {
  const[tela,setTela] = useState('server')

  switch(tela){
    case 'cliente':
      return createCliente();
    case 'server':
      useState('cliente');
      return createServer();

  }

  function createCliente(){
    <Client></Client>;
   
  }

  function createServer(){
    <Server></Server>;
  }

  return (
    <View style={style.container}>
      <Text> Open up trabalho de redes </Text>
      <StatusBar style="auto"/>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});