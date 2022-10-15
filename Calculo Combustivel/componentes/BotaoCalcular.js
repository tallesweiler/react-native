import React from 'react';
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native';

export default props=> {
  return (
    <View style={estilos.bloco}>
        <TouchableHighlight
            style={estilos.botao}
            onPress={()=>props.aoClicar()}
        >
            <Text style={estilos.textoBotao}>Calcular</Text>
        </TouchableHighlight>
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:10,
    },
    textoBotao: {
        color:'white',
        fontSize:15,
        textTransform:'uppercase'
    },
    botao: {
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        padding:10
    }
});