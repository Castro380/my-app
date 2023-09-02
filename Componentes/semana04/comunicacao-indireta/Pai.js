import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Filho from './Filho'

export default function Pai() {
  return (
    <View>
      <Text style={{fontsize: 30}}>O numero aleatorio é?</Text>
      <Text style={{fontsize: 30}}>NUMERO</Text>

    <Filho min="1" max="60" />

    </View>
  )
}

const styles = StyleSheet.create({})