import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Contador() {
    const [contador, setContador] = React.useState(0);
    
    const inc = () => {
        setContador(contador + 1);
    };

    const dec = () => {
        setContador(contador - 1);
    };



    return (
        <View>
            <Text style={styles.text}>Volume</Text>
            <Text style={styles.text}>{contador}</Text>
            <View>
                <Button style={styles.botao} title='+ incrementar' onPress={inc}></Button>
                <Button style={styles.botao} title='- decrementar' onPress={dec}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 5,
    },
    botao: {
        fontSize: 5,
        flex: 1,
        width: 10,
    },
})