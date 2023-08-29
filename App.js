import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import MinMax from './Componentes/semana01/MinMax';
import NumeroAleatorio from './Componentes/semana02/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <MinMax min={10} max={20} />
      <NumeroAleatorio min={10} max={1000} />
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
