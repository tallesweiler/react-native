import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default props=> {
    return (
        <View style={estilos.corpo}>
            <Text style={estilos.texto}>Nomes das pessoas:</Text>
            <TextInput
                style={estilos.caixaTexto}
                onChangeText={(text)=>{props.setarNome(text)}}
            ></TextInput>
            <View style={estilos.botoes}>
                <Button
                    title='Adicionar'
                    onPress={()=>{props.adicionarNome(nome)}}
                />
                <Button
                    title='     Lista     '
                    onPress={()=>{props.listaNomes()}}
                />
                <Button
                    title='   Limpar   '
                    onPress={()=>{props.limparNomes()}}
                />
            </View>
        </View>
    )  
}

const estilos = StyleSheet.create({
    caixaTexto: {
        borderColor:'black',
        borderRadius:20,
        borderWidth:2,
    },
    texto: {
        color:'black',
        fontSize:20,
    },
    corpo: {
        
    },
    botoes: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10,
    },
})