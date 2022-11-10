import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,Text,View,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Equipe1 from './componentes/Equipe1';
import Equipe2 from './componentes/Equipe2';
import Equipe3 from './componentes/Equipe3';
import Equipe4 from './componentes/Equipe4';
import Equipe5 from './componentes/Equipe5';
import Equipe6 from './componentes/Equipe6';
import Equipe7 from './componentes/Equipe7';
import Equipe8 from './componentes/Equipe8';
import Equipe9 from './componentes/Equipe9';
import Equipe10 from './componentes/Equipe10';

export default function torneio() {
  const [opcao]=useState(['-','Equipe 1','Equipe 2','Equipe 3','Equipe 4','Equipe 5','Equipe 6','Equipe 7','Equipe 8','Equipe 9','Equipe 10'])
  const [selectedValue,setSelectedValue]=useState([])

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Formulário</Text>
          </View>
          <View>
            <Text style={styles.texto}>Selecione a equipe:</Text>
          </View>
          <View style={styles.container3}>
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
          </View>
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
            ) : (selectedValue=='Equipe 6') ? (
              <Equipe6/>
            ) : (selectedValue=='Equipe 7') ? (
              <Equipe7/>
            ) : (selectedValue=='Equipe 8') ? (
              <Equipe8/>
            ) : (selectedValue=='Equipe 9') ? (
              <Equipe9/>
            ) : (selectedValue=='Equipe 10') ? (
              <Equipe10/>
            ) : null)
          }  
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    flex:1,
    backgroundColor:"#fafafa",
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
  botaoContainer: {
    width:"50%",
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10,
  },
  container2: {
    backgroundColor:'#fafafa',
  },
  container3: {
    backgroundColor:'gray',
    borderRadius:10,
    marginHorizontal:5,
  },
});

