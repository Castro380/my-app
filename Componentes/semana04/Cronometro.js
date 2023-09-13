import React, { Component } from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

class Cronometro extends Component {
    marcarTempo = () => {
        const { horas, minutos, segundos } = this.state;
        const tempoMarcado = this.formatarTempo();
        this.setState((prevState) => ({
            temposMarcados: [...prevState.temposMarcados, tempoMarcado], // Adicionamos o tempo ao array
            ultimoTempoMedido: tempoMarcado,
        }));
    };
    constructor() {
        super();
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: '00:00:00',
            temposMarcados: [],
        };
        this.interval = null;
        this.temposMarcados = [];

    }

    iniciarCronometro = () => {
        if (!this.state.cronometroAtivo) {
            this.setState({ cronometroAtivo: true });
            this.interval = setInterval(() => {
                const { horas, minutos, segundos } = this.state;
                if (segundos === 59) {
                    if (minutos === 59) {
                        this.setState({ horas: horas + 1, minutos: 0, segundos: 0 });
                    } else {
                        this.setState({ minutos: minutos + 1, segundos: 0 });
                    }
                } else {
                    this.setState({ segundos: segundos + 1 });
                }
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState({ cronometroAtivo: false });
        }
    };

    reiniciarCronometro = () => {
        clearInterval(this.interval);
        this.setState({
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: this.formatarTempo(),
        });
    };

    formatarTempo = () => {
        const { horas, minutos, segundos } = this.state;
        const formatarDigito = (numero) => (numero < 10 ? `0${numero}` : `${numero}`);
        return `${formatarDigito(horas)}:${formatarDigito(minutos)}:${formatarDigito(segundos)}`;
    };

    apagar = () => {
        this.setState({temposMarcados: []})
    }
 
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://img.freepik.com/vetores-premium/o-treinador-segura-um-cronometro-na-mao-e-marca-o-tempo_124715-867.jpg' }}
                    style={{ width: 200, height: 200, marginTop: 160, }}
                />
                <Text style={{ fontSize: 24, marginTop: 20 }}>{this.formatarTempo()}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Icon
                        raised
                        name={this.state.cronometroAtivo ? 'pause' : 'play-arrow'}
                        type='material'
                        color='#f50'
                        onPress={this.iniciarCronometro}
                    />
                    <Icon
                        raised
                        name='refresh'
                        type='material'
                        color='#f50'
                        onPress={this.reiniciarCronometro}
                    />
                    <Icon
                        raised
                        name='add'
                        type='material'
                        color='#f50'
                        onPress={this.marcarTempo}
                    />

                    <Icon
                        raised
                        name='delete'
                        type='material'
                        color='#f50'
                        onPress={this.apagar}
                    />  

                </View>
                <Text>Último tempo medido: {this.state.ultimoTempoMedido}</Text>


                <FlatList
                    data={this.state.temposMarcados}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

export default Cronometro;