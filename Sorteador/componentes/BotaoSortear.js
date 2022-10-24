import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default props=> {
    return (
        <View>
            <TouchableHighlight
                style={estilos.botao}
                onPress={()=>sortear()}
            >
                <Text style={estilos.textoBotao}>Sortear</Text>
            </TouchableHighlight>
        </View>
    )  
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        padding:15,
        marginTop:10,
        margin:5,
    },
    textoBotao: {
        fontSize:15,
        color:'white',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
})