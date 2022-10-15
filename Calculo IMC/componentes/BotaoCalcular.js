import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default props=> {
    return (
        <View style={estilos.container}>
            <TouchableHighlight
                style={estilos.botaoCalc}
                onPress={()=>{props.aoClicar()}}
            >
                <Text style={estilos.textoBotao}>Calcular IMC</Text>
            </TouchableHighlight>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
      marginBottom:20,
    },  
    botaoCalc: {
      backgroundColor:'#048',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      borderRadius:20,
    },
    textoBotao: {
      fontSize:15,
      textTransform:'uppercase',
      color:'#fff'
    },
  });