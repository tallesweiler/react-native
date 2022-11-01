import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Equipe1 from './componentes/Equipe1';
import Equipe2 from './componentes/Equipe2';
import Equipe3 from './componentes/Equipe3';
import Equipe4 from './componentes/Equipe4';
import Equipe5 from './componentes/Equipe5';
import { withTheme } from 'react-native-elements';


export default function torneio() {
  const [opcao]=useState(['-','Equipe 1','Equipe 2','Equipe 3','Equipe 4','Equipe 5'])
  const [selectedValue,setSelectedValue]=useState([])

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Formulário</Text>
        </View>
        <View>
          <Text style={styles.texto}>Selecione a equipe:</Text>
        </View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue)=>{setSelectedValue(itemValue)}}
        >
          {
            opcao.map(opt=>{
              return <Picker.Item label={opt} value={opt}/>
            })
          }
        </Picker>
        {
          selectedValue=='Equipe 1' ? (
            <Equipe1/>
          ) : (selectedValue=='Equipe 2' ? (
            <Equipe2/>
          ) : (selectedValue=='Equipe 3') ? (
            <Equipe3/>
          ) : (selectedValue=='Equipe 4') ? (
            <Equipe4/>
          ) : (selectedValue=='Equipe 5') ? (
            <Equipe5/>
          ) : null)
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  titulo: {
    fontSize:30,
    fontWeight:'bold',
    color:'black',
  },
  texto: {
    fontSize:20,
    color:'black',
    marginLeft:10,
  },
});

