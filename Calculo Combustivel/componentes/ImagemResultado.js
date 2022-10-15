import React from 'react';
import {StyleSheet,View,Image} from 'react-native';

export default props=> {
  return (
    <View style={estilos.bloco}>
        {
            props.comb=='' ?
                <Image
                    source={require('../assets/bomba.jpeg')}
                    style={estilos.bomba}
                />
            : props.comb=='G' ?
                <Image
                    source={require('../assets/bombaG.jpeg')}
                    style={estilos.bomba}
                />
            :
                <Image
                    source={require('../assets/bombaE.jpeg')}
                    style={estilos.bomba}
                />            
        }    
    </View>
  )
}

const estilos = StyleSheet.create({
    bloco: {
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bomba: {
        resizeMode:'stretch'
    },  
});