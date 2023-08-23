import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './Componentes/MeuComponente';
import MinMax from './Componentes/MinMax';

export default function App() {
  return (
    <View style={styles.container}>
      <MeuComponente/>
      <MinMax min="10" max="20" />
      <Text style={[styles.text]}>HELLO WORLD</Text>
      <Image source={require('./assets/favicon.png')} 
      style={{width: 200, height: 200}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

text: {
  fontSize: 25,
  color: 'white'
}
});
