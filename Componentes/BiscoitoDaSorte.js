import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const BiscoitoDaSorte = () => {
    const [mensagem, setMensagem] = useState('');
    const [bloquearBotao, setBloquearBotao] = useState(false);
    const [imagemBiscoito, setImagemBiscoito] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhWHMd4fv5L8zph65iv39wBO9_kf34obsmUKMTzDz_0fPevCRydMMEsVmkwOI9HiZ42o&usqp=CAU');

    const quebrarBiscoito = () => {
        const mensagens = [
            "A sorte está a seu favor.",
            "Grandes realizações estão por vir.",
            "Seu esforço será recompensado em breve.",
            "A vida é feita de momentos especiais.",
            "Acredite em si mesmo e siga em frente."
        ];

        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        setMensagem(mensagemAleatoria);
        setBloquearBotao(true);
        setImagemBiscoito('https://media.istockphoto.com/id/174622880/pt/foto/bolinho-da-sorte.jpg?s=612x612&w=0&k=20&c=Gx9Vlrxg0nbkwvTCmjlX1G3XkzUhir7x4bJ05igukO8=');
    };

    const reiniciarBiscoito = () => {
        setMensagem('');
        setBloquearBotao(false);
        setImagemBiscoito('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQhWHMd4fv5L8zph65iv39wBO9_kf34obsmUKMTzDz_0fPevCRydMMEsVmkwOI9HiZ42o&usqp=CAU');
    };

    return (
        <View style={styles.container}>
            <View style={styles.biscoito}>
                <Image source={{ uri: imagemBiscoito }} style={styles.imagemBiscoito} />
                <Text style={styles.mensagem}>{mensagem}</Text>
                <Button
                    title="Quebrar Biscoito"
                    onPress={quebrarBiscoito}
                    disabled={bloquearBotao}
                    color="orange"
                    style={styles.botao}
                />
                <Button
                    title="Reiniciar Biscoito"
                    onPress={reiniciarBiscoito}
                    disabled={!bloquearBotao}
                    color="orange"
                    style={styles.botao}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biscoito: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'transparent',
        elevation: 0,
        borderWidth: 0,
    },
    imagemBiscoito: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderWidth: 0,
    },
    mensagem: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'orange',
    },
    botao: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default BiscoitoDaSorte;