import React from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';

export default props=> {
  return (
    <View style={estilos.bloco}>
        <Text style={estilos.textoPreto}>Digite o preço da gasolina:</Text>
        <TextInput
            style={estilos.caixaTexto}
            keyboardType={'numeric'}
            onChangeText={(text)=>props.aoModificar(text)}
        ></TextInput>
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:10,
    },
    caixaTexto: {
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
    },
    textoPreto: {
        color:'black',
        fontSize:15,
    }
});