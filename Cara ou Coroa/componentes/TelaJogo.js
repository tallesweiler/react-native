import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,Text,Image, TouchableHighlight} from 'react-native';
import Globais from './Globais';

export default function CaraCoroa() {

  const moedas=[
    require('../imagens/m1.png'),
    require('../imagens/m5.png'),
    require('../imagens/m1.png'),
    require('../imagens/m2.png'),
    require('../imagens/m3.png'),
    require('../imagens/m4.png'),
    require('../imagens/m5.png'),
    require('../imagens/m6.png'),
    require('../imagens/m7.png'),
    require('../imagens/m8.png'),
  ]

  let iMoeda=0
  const [moedaAtual,setMoedaAtual]=useState(moedas[iMoeda])

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await tempo(tmp)
  }

  async function girarMoeda() {
    let maxGiros=Globais.qtdGiros
    let tempoGiro=Globais.tempoEspera
    iMoeda=2

    for(let i=0;i<(maxGiros*8);i++) {
      iMoeda++

      if (iMoeda>9) {
        iMoeda=2
      }

      setMoedaAtual(moedas[iMoeda])  
      await espera(tempoGiro)
    }

    let res=Math.floor(Math.random()*10)+1

    if (res<=5)
      res=0
    else
      res=1

    setMoedaAtual(moedas[res])
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>{Globais.titulo}</Text>
      <Image source={moedaAtual}/>
      <TouchableHighlight
        style={estilos.botaoGirar}
        onPress={()=>{girarMoeda()}}
      >
        <Text style={estilos.textoBotao}>Girar</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    padding:10
  },
  textoBotao: {
    color:'black',
    textTransform:'uppercase',
    fontSize:20
  },
  botaoGirar: {
    margin:20,
    backgroundColor:'#fc0',
    padding:15,
    width:'100%',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  titulo: {
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    fontSize:30,
    color:'#fc0',
    textTransform:'uppercase'
  },
});
