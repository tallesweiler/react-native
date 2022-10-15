import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default props=> {
  return (
    <View style={estilos.bloco}>
        <Text style={estilos.textoPreto}>Melhor Combustivel: {props.resultado}</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:10,
    },
    textoPreto: {
        color:'black',
        fontSize:15,
    }
});
