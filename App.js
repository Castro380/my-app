import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import BiscoitoDaSorte from './Componentes/BiscoitoDaSorte';
import MinMax from './Componentes/semana01/MinMax';
import NumeroAleatorio from './Componentes/semana02/NumeroAleatorio';
import Botao from './Componentes/semana03/Botao';
import Contador from './Componentes/semana03/Contador';
import DigiteSeuNome from './Componentes/semana03/DigiteSeuNome';
import Filho from './Componentes/semana04/comunicacao-direta/Filho';
import Pai from './Componentes/semana04/comunicacao-direta/Pai';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MinMax min={10} max={20} />
      <NumeroAleatorio min={10} max={1000} />
      <Text style={[styles.text]}>HELLO WORLD</Text>
      <Botao />
      <Contador />
      <DigiteSeuNome /> 
      <Pai/>={require('./assets/favicon.png')} 
      style={{width: 200, height: 200}} />*/}
      <BiscoitoDaSorte/>
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
