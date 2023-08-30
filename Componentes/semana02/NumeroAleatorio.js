import { useState } from "react"
import { Button, StyleSheet, Text } from "react-native"


const NumeroAleatorio = function ({min, max}) {

    const [numeroAleatorio, setNumeroAleatorio] = useState('')
    
    const geraNumero = () => {
      setNumeroAleatorio(parseInt(Math.random() * (max - min) + 1)) + min
    }

return(
    <>
        <Button onPress={geraNumero} title='Clique aqui'></Button>
        <Text style={styles.text}> O numéro aleatório é:  {numeroAleatorio} </Text>
    </>
)

}

export default NumeroAleatorio

const styles = StyleSheet.create({
  
  text: {
    fontSize: 25,
    color: 'white'
  }
  });
  