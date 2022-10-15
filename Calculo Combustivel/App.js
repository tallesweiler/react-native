import React, {useState} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Titulo from './componentes/Titulo'
import Gasolina from './componentes/Gasolina'
import Etanol from './componentes/Etanol'
import Botao from './componentes/BotaoCalcular'
import Resultado from './componentes/Resultado'
import Imagem from './componentes/ImagemResultado'

export default function calcCombustivel() {
  
  const [gasolina,setGasolina]=useState(0)
  const [etanol,setEtanol]=useState(0)
  const [resultado,setResultado]=useState('')

  function calcular() {
    if (!gasolina) {
      alert('Informe o preço da gasolina!')
      return
    }
    if (!etanol) {
      alert('Informe o preço do etanol!')
      return
    }

    let calc=((etanol/gasolina)*100).toFixed(2)
    let res

    if (calc>70)
      res='Gasolina'
    else
      res='Etanol'

    alert('O Etanol está custando ' + calc + '% da Gasolina. Logo, é melhor abastecer com ' + res )
    setResultado(res)
  }

  function limpar() {
    setResultado('')
  }

  function setarGasolina(v) {
    limpar()
    setGasolina(v)
  }

  function setarEtanol(v) {
    limpar()
    setEtanol(v)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Titulo/>
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol aoModificar={setarEtanol}/>
      <Botao aoClicar={calcular}/>
      <Resultado resultado={resultado}/>
      <Imagem comb={resultado.charAt(0)}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    padding:10,
  },
});
