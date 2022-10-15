import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default props=> {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoPreto}>Informe seu peso:</Text>
            <TextInput
                style={estilos.barrinha}
                autoFocus={true}
                keyboardType={'numeric'}
                onChangeText={(text)=>props.aoModificar(text)}
            ></TextInput>
        </View>
    )
}

const estilos = StyleSheet.create({
    textoPreto: {
      color:'black'
    },
    barrinha: {
      width:'100%',
      borderWidth:1,
      borderColor:'black',
      padding:10,
      borderRadius:10,
    },
    container: {
      marginBottom:20,
    },  
});