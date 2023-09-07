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
import IntroducaoEstilos from './Componentes/semana04/IntroducaoEstilos';
import ParOuImpar from './Componentes/semana04/ParOuImpar';
import Profile from './Componentes/semana04/Profile';

export default function App() {
  return (

      // {/* <MinMax min={10} max={20} />
      // <NumeroAleatorio min={10} max={1000} />
      // <Text style={[styles.text]}>HELLO WORLD</Text>
      // <Botao />
      // <Contador />
      // <DigiteSeuNome /> 
      // <Pai/>={require('./assets/favicon.png')} 
      // {<ComponenteControlado />}
      // {<DigiteSeuNome />}
      // style={{width: 200, height: 200}} />
      // <BiscoitoDaSorte/>
      // <IntroducaoEstilos/>
      // <ParOuImpar/>*/}
      <Profile
      imgUri='https://www.fakepersongenerator.com/Face/female/female20161024753601562.jpg'
      genero='Feminino'
      nome='Felicia J Ochoa'
      email='aiyana1980@gmail.com'
      telefone='630-337-6439'
    />

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// text: {
//   fontSize: 25,
//   color: 'white'
// }
// });
