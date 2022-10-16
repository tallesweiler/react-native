import React,{useState} from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';
import Globais from './Globais';

export default function TelaConfig() {

    const [giros,setGiros]=useState(Globais.qtdGiros)
    const [tempo,setTempo]=useState(Globais.tempoEspera)

    function setarGiros(v) {
        Globais.qtdGiros=parseInt(v)
        setGiros(v)
    }
    function setarTempo(v) {
        Globais.tempoEspera=parseInt(v)
        setTempo(v)
    }

    return (
        <View>
            <Text style={estilos.titulo}>Quantidade de giros:</Text>
            <TextInput
                style={estilos.caixaTexto}
                value={String(giros)}
                onChangeText={(valor)=>{setarGiros(valor)}}
                keyboardType='numeric'
            />
            <Text style={estilos.titulo}>Velocidade do giro:</Text>
            <TextInput
                style={estilos.caixaTexto}
                value={String(tempo)}
                onChangeText={(valor)=>{setarTempo(valor)}}
                keyboardType='numeric'
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        padding:10,
    },  
    titulo: {
        color:'white'
    },
    caixaTexto: {
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        padding:10,
        marginBottom:20,
        color:'#fc0'
    },
});
