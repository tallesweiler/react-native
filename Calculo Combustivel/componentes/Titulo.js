import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default function Etanol() {
  return (
    <View style={estilos.bloco}>
        <Text style={estilos.textoPreto}>Calculadora preço combustivel</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:15,
    },
    textoPreto: {
        color:'black',
        fontSize:15,
    }
});