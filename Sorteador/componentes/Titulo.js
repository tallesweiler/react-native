import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Titulo() {
    return (
        <View style={estilos.central}>
            <Text style={estilos.titulo}>Sorteador</Text>
        </View>
    )  
}

const estilos = StyleSheet.create({
    central: {
        justifyContent:'center',
        alignItems:'center'
    },
    titulo: {
      color:'black',
      fontSize:40,
      textTransform:'uppercase',
      fontWeight:'bold'
    },
})