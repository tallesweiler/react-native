import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, TouchableHighlight, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Sorteador() {
  const [opcao]=useState(['-','Solo','Duplas','Trios','Quartetos','Quintetos'])
  const [selectedValue,setSelectedValue]=useState([])
  const [qtdPessoas,setQtdPessoas]=useState(0)
  const [nome,setNome]=useState('')
  const [names,setNames]=useState([''])

  async function sortear() {
    if (selectedValue=='Solo' && qtdPessoas%1!=0) {
      alert('nao será possivel fazer o sorteio')
      return
    }
    else if (selectedValue=='Duplas' && qtdPessoas%2!=0) {
      alert('nao será possivel formar duplas')
      return
    }
    else if (selectedValue=='Trios' && qtdPessoas%3!=0) {
      alert('nao será possivel formar trios')
      return
    }
    else if (selectedValue=='Quartetos' && qtdPessoas%4!=0) {
      alert('nao será possivel formar quartetos')
      return
    }
    else if (selectedValue=='Quintetos' && qtdPessoas%5!=0) {
      alert('nao será possivel formar quintetos')
      return
    }

    let numeros=[]

    for (let i=0;i<qtdPessoas;i++) {
      while (1) {
        let num=Math.floor(Math.random()*(qtdPessoas))+1
        let aux=true
        for (let j=0;j<i;j++) {
          if (numeros[j]==num) {
            aux=false
            break
          }
          aux=true
        }
        if (aux==true) {
          numeros[i]=num
          break
        }
      }
    }

    let resultado=[]
    if (selectedValue=='Solo') {
      resultado[0]=''+names[numeros[0]]
    }
    if (selectedValue=='Duplas') {
      for (let i=0;i<(qtdPessoas/2);i++) {
        resultado[i]=' '+names[numeros[i*2]]+'-'+names[numeros[i*2+1]]+' '
      }
    }
    if (selectedValue=='Trios') {
      for (let i=0;i<(qtdPessoas/3);i++) {
        resultado[i]=' '+names[numeros[i*3]]+'-'+names[numeros[i*3+1]]+'-'+names[numeros[i*3+2]]+' '
      }
    }
    if (selectedValue=='Quartetos') {
      for (let i=0;i<(qtdPessoas/4);i++) {
        resultado[i]=' '+names[numeros[i*4]]+'-'+names[numeros[i*4+1]]+'-'+names[numeros[i*4+2]]+'-'+names[numeros[i*4+3]]+' '
      }
    }
    if (selectedValue=='Quintetos') {
      for (let i=0;i<(qtdPessoas/5);i++) {
        resultado[i]=' '+names[numeros[i*5]]+'-'+names[numeros[i*5+1]]+'-'+names[numeros[i*5+2]]+'-'+names[numeros[i*5+3]]+'-'+names[numeros[i*5+4]]+' '
      }
    }

    await espera(100)
    alert(resultado)
  }

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await tempo(tmp)
  }

  function recebeNome(name){
    setNames([...names,name])
  }
  function limpaNomes(){
    setNames([''])

  }
  function listaNomes(){
    alert(names)
  }

  return(
    <SafeAreaView>
      <View style={estilos.central}>
        <Text style={estilos.titulo}>Sorteador</Text>
      </View>
      <View style={estilos.corpo}>
        <Text style={estilos.texto}>Quantas pessoas:</Text>
        <TextInput
          style={estilos.caixaTexto}
          keyboardType={'numeric'}
          onChangeText={(text)=>{setQtdPessoas(text)}}
        ></TextInput>
      </View>
      <View style={estilos.corpo}>
        <Text style={estilos.texto}>Modo de sorteio:</Text>
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
      <View style={estilos.corpo}>
        <Text style={estilos.texto}>Nomes das pessoas:</Text>
        <TextInput
          style={estilos.caixaTexto}
          onChangeText={(text)=>{setNome(text)}}
        ></TextInput>
        <View style={estilos.botoes}>
          <Button
            title='Adicionar'
            onPress={()=>{recebeNome(nome)}}
          />
          <Button
            title='     Lista     '
            onPress={()=>{listaNomes()}}
          />
          <Button
            title='   Limpar   '
            onPress={()=>{limpaNomes()}}
          />
        </View>
      </View>
      <View>
        <TouchableHighlight
          style={estilos.botao}
          onPress={()=>sortear()}
        >
          <Text style={estilos.textoBotao}>Sortear</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  corpo: {
    padding:10,
  },
  titulo: {
    color:'black',
    fontSize:40,
    textTransform:'uppercase',
    fontWeight:'bold'
  },  
  caixaTexto: {
    borderColor:'black',
    borderRadius:20,
    borderWidth:2,
  },
  texto: {
    color:'black',
    fontSize:20,
  },
  central: {
    justifyContent:'center',
    alignItems:'center'
  },
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
  botaoNome: {
    width:'30%',
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginTop:5,
    marginHorizontal:250,
  },
  botaoNome2: {
    width:'30%',
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    marginTop:5,
    marginHorizontal:250,
  },
  botoes: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:10,
  }
});
