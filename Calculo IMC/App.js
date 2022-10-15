import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Titulo from './componentes/Titulo'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import Botao from './componentes/BotaoCalcular'
import Resultado from './componentes/Resultado'

export default function calcimc() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)
  const [classe,setClasse]=useState()

  function calcImc() {
    if (peso==0 || !peso) {
      alert('Informe o peso!')
      return
    }
    if (altura==0 || !altura) {
      alert('Informe a altura!')
      return
    }
    
    const r=peso/(altura*altura)

    setResultado(r.toFixed(2))

    if (r>0 && r<=18.4)
      setClasse('Abaixo do peso')
    else if (r>=18.5 && r<=24.9)
      setClasse('Normal')
    else if (r>=25 && r<=29.9)
      setClasse('Sobrepeso')
    else if (r>=30 && r<=39.9)
      setClasse('Obesidade')
    else if (r>=40)
      setClasse('Obesidade grave')
  }

  return (
    <SafeAreaView style={estilos.corpo}>
      <Titulo/>
      <Peso aoModificar={setPeso}/>
      <Altura aoModificar={setAltura}/>
      <Botao aoClicar={calcImc}/>
      <Resultado resultado={resultado} classe={classe}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  corpo: {
    padding:10,
  },
});
