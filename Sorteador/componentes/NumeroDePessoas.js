import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Titulo() {
    return (
        <View style={estilos.corpo}>
            <Text style={estilos.texto}>Quantas pessoas:</Text>
            <TextInput
            style={estilos.caixaTexto}
            keyboardType={'numeric'}
            onChangeText={(text)=>{setQtdPessoas(text)}}
            ></TextInput>
        </View>
    )  
}

const estilos = StyleSheet.create({
    corpo: {
        padding:10,
    },
    caixaTexto: {
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
    },
    texto: {
        color:'black',
        fontSize:20,
    },
})