import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoPreto}>Resultado: {props.resultado} ({props.classe})</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
      marginBottom:20,
    },  
    textoPreto: {
        color:'black'
      },
  });