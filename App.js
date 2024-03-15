import React, {useEffect, useState} from 'react';
import { Text, Pressable, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./AppStyle"

export default function App() {

  const [scanner, definirScanner] = useState(false)

  async function ObterPermissao(){
    await BarCodeScanner.requestPermissionsAsync()
  }

  useEffect(function(){
    ObterPermissao()
  }, [])

  function Scannear({type, data}){
    definirScanner(true)
    alert(data)
  }

  return <LinearGradient colors={["red", "blue"]} style={styles.tela}>
    <StatusBar
      translucent
      barStyle={'light-content'}
      backgroundColor={"transparent"}/>

      { scanner ?
        <Pressable onPress={function() {definirScanner(false)}}>
          <Text style={styles.Text}> Escanear Novamente </Text>
        </Pressable> 
      :
        <BarCodeScanner onBarCodeScanned={Scannear} style={styles.camera}/>
      }
  </LinearGradient>
}
