import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
 
export default function IntroducaoEstilos() {
  return (
    <View style={{ flexDirection: 'row', flex: 1 ,backgroundColor: 'gray'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}><Text>Texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'blue'}}><Text>Texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'black'}}><Text>Texto</Text></View>
      <View style={{flex: 1, backgroundColor: 'green'}}><Text>Texto</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({})