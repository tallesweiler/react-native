import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function() {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoPreto}>Calculadora de IMC</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    textoPreto: {
      color:'black'
    },
    container: {
      marginBottom:20,
    },  
});