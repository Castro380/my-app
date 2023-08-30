import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function DigiteSeuNome() {
  
    const [nome, setNome] = React.useState('')
    const [valorDigitado, setValorDigitado] = React.useState('')
  
  
  
  
    return (
    <View>
      <Text style={styles.text}>DigiteSeuNome</Text>
      <Text style={styles.text}>{nome}</Text>

      <TextInput 
        style={styles.input}
        onChangeText={e => setValorDigitado(e)}
        placeholder='Digite seu nome'
        value={nome}





      />

        <Button 
        title="Enviar"
        onPress={() => setNome(valorDigitado)}

        />



    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        fontSize: 20,
        color: 'red',
        borderWidth: 2,
        margin: 10
    },
})