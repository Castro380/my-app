import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filho() {
  return (
    <View>
      <Button title='Enviar'
      onPress={()=> alert('CLICOU')}

      />
    </View>
  )
}

const styles = StyleSheet.create({})