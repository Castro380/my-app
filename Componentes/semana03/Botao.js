import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
 
export default function Botao() {
    function executarBotao2() {
        alert("Botão 2 clicado!");
    }

    return (
        <View style={style.botao}>
    
            <Text style={style.text}>Botaos</Text>

            <Button 
            onPress={() => alert("Botão 1 clicado!")}
            title="Botão 1"
            >
            </Button>
            <Button 
            onPress={executarBotao2}
            title="Botão 2"
            >
            </Button>
            <Button 
            onPress={function executarBotao2()  {
                alert("Botão 3 clicado!");

            }}
            title="Botão 3"
            >
            </Button>


        </View>
        
   
    );
}

const style = StyleSheet.create({
  
    text: {
      fontSize: 25,
      color: 'white'
    }
    });
    