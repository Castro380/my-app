import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParOuImpar(props) {

    const numero = props.numero.
    let = resultado = ''

    if (numero % 2 === 0) {
        resultado = 'Par'
    } else {
        resultado = 'Impar'
    };

  return (
    <View>
      <Text style={{fontSize: 30}}>o numero {numero} é :</Text>
      <Text>o numero {numero % 2 === 0 ? 'Par' : 'Impar' } é :</Text>
    </View>
  )
}

const styles = StyleSheet.create({})