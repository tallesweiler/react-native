import React, {useState} from 'react';
import {Alert, SafeAreaView,StyleSheet,Text,View,ScrollView,TouchableHighlight} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

export default function torneio() {
  const [at1,setAt1]=useState(false)
  const [at2,setAt2]=useState(false)
  const [at3,setAt3]=useState(false)
  const [at5v,setAt5v]=useState(false)
  const [at51v,setAt51v]=useState(false)
  const [at52v,setAt52v]=useState(false)
  const [at53v,setAt53v]=useState(false)
  const [at54v,setAt54v]=useState(false)
  const [at5a,setAt5a]=useState(false)
  const [at51a,setAt51a]=useState(false)
  const [at52a,setAt52a]=useState(false)
  const [at53a,setAt53a]=useState(false)
  const [at54a,setAt54a]=useState(false)
  const [at5l,setAt5l]=useState(false)
  const [at51l,setAt51l]=useState(false)
  const [at52l,setAt52l]=useState(false)
  const [at53l,setAt53l]=useState(false)
  const [at54l,setAt54l]=useState(false)
  const [at6,setAt6]=useState(false)
  const [gap,setGap]=useState(0)

  function click() {
    let res=0
    
    if (at1)
      res+=10
    if (at2)
      res+=20
    if (at3) 
      res+=30
    if (at51v)
      res+=10
    if (at52v) 
      res+=10
    if (at53v)
      res+=10
    if (at54v)
      res+=10
    if (at51a)
      res+=10
    if (at52a) 
      res+=10
    if (at53a)
      res+=10
    if (at54a)
      res+=10
    if (at51l)
      res+=10
    if (at52l) 
      res+=10
    if (at53l)
      res+=10
    if (at54l)
      res+=10
    if (at6) 
      res+=50
    res+=5*gap

    Alert.alert(
      "Resultado", "Voce marcou " + res + " pontos!"
    )
  }

  function setResgateVermelho(num) {
    if (num===1) {
      setAt51v(!at51v)
      if(!at51v && at52v && at53v && at54v)
        todosMarcadosVermelho(1)
      else 
      todosMarcadosVermelho(0)
    } 
    else if (num===2) {
      setAt52v(!at52v)
      if(at51v && !at52v && at53v && at54v)
        todosMarcadosVermelho(1)
      else 
      todosMarcadosVermelho(0)
    }
    else if (num===3) {
      setAt53v(!at53v)
      if(at51v && at52v && !at53v && at54v)
        todosMarcadosVermelho(1)
      else 
      todosMarcadosVermelho(0)
    }
    else if (num===4) {
      setAt54v(!at54v)
      if(at51v && at52v && at53v && !at54v)
        todosMarcadosVermelho(1)
      else 
      todosMarcadosVermelho(0)
    }
  }

  function todosMarcadosVermelho(aux) {
    if (aux===1) 
      setAt5v(true)
    else 
      setAt5v(false)
  }

  function setResgateAmarelo(num) {
    if (num===1) {
      setAt51a(!at51a)
      if(!at51a && at52a && at53a && at54a)
        todosMarcadosAmarelo(1)
      else 
      todosMarcadosAmarelo(0)
    } 
    else if (num===2) {
      setAt52a(!at52a)
      if(at51a && !at52a && at53a && at54a)
        todosMarcadosAmarelo(1)
      else 
      todosMarcadosAmarelo(0)
    }
    else if (num===3) {
      setAt53a(!at53a)
      if(at51a && at52a && !at53a && at54a)
        todosMarcadosAmarelo(1)
      else 
      todosMarcadosAmarelo(0)
    }
    else if (num===4) {
      setAt54a(!at54a)
      if(at51a && at52a && at53a && !at54a)
        todosMarcadosAmarelo(1)
      else 
      todosMarcadosAmarelo(0)
    }
  }

  function todosMarcadosAmarelo(aux) {
    if (aux===1) 
      setAt5a(true)
    else 
      setAt5a(false)
  }

  function setResgateLilas(num) {
    if (num===1) {
      setAt51l(!at51l)
      if(!at51l && at52l && at53l && at54l)
        todosMarcadosLilas(1)
      else 
      todosMarcadosLilas(0)
    } 
    else if (num===2) {
      setAt52l(!at52l)
      if(at51l && !at52l && at53l && at54l)
        todosMarcadosLilas(1)
      else 
      todosMarcadosLilas(0)
    }
    else if (num===3) {
      setAt53l(!at53l)
      if(at51l && at52l && !at53l && at54l)
        todosMarcadosLilas(1)
      else 
      todosMarcadosLilas(0)
    }
    else if (num===4) {
      setAt54l(!at54l)
      if(at51l && at52l && at53l && !at54l)
        todosMarcadosLilas(1)
      else 
      todosMarcadosLilas(0)
    }
  }

  function todosMarcadosLilas(aux) {
    if (aux===1) 
      setAt5l(true)
    else 
      setAt5l(false)
  }

  function aumentaGap() {
    setGap(gap+1)
  }
  function diminuiGap() {
    if (gap>0)
      setGap(gap-1)
  }

  function marcaTodosVermelho() {
    if (at5v) {
      setAt5v(false)
      setAt51v(false)
      setAt52v(false)
      setAt53v(false)
      setAt54v(false)
    }
    else {
      setAt5v(true)
      setAt51v(true)
      setAt52v(true)
      setAt53v(true)
      setAt54v(true)
    }
  }

  function marcaTodosAmarelo() {
    if (at5a) {
      setAt5a(false)
      setAt51a(false)
      setAt52a(false)
      setAt53a(false)
      setAt54a(false)
    }
    else {
      setAt5a(true)
      setAt51a(true)
      setAt52a(true)
      setAt53a(true)
      setAt54a(true)
    }
  }

  function marcaTodosLilas() {
    if (at5l) {
      setAt5l(false)
      setAt51l(false)
      setAt52l(false)
      setAt53l(false)
      setAt54l(false)
    }
    else {
      setAt5l(true)
      setAt51l(true)
      setAt52l(true)
      setAt53l(true)
      setAt54l(true)
    }
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Formulário</Text>
        </View>
        <CheckBox
          title="Passar o portal - 10 pontos"
          checked={at1}
          onPress={()=>setAt1(!at1)}
          checkedColor="#1F7A01"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="Volta Completa - 20 pontos"
          checked={at2}
          onPress={()=>setAt2(!at2)}
          checkedColor="#1F7A01"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="Desvio do obstáculo - 30 pontos"
          checked={at3}
          onPress={()=>setAt3(!at3)}
          checkedColor="#1F7A01"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="Resgate Vermelho"
          checked={at5v}
          onPress={()=>{marcaTodosVermelho()}}
          checkedColor="#F31009"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="     • Identificar a vítima - 10 pontos"
          checked={at51v}
          onPress={()=>setResgateVermelho(1)}
          checkedColor="#F31009"
        />
        <CheckBox
          title="     • Levar a vítima - 10 pontos"
          checked={at52v}
          onPress={()=>setResgateVermelho(2)}
          checkedColor="#F31009"
        />
        <CheckBox
          title="     • Deixar a vítima - 10 pontos"
          checked={at53v}
          onPress={()=>setResgateVermelho(3)}
          checkedColor="#F31009"
        />
        <CheckBox
          title="     • Retomar a linha - 10 pontos"
          checked={at54v}
          onPress={()=>setResgateVermelho(4)}
          checkedColor="#F31009"
        />
        <CheckBox
          title="Resgate Amarelo"
          checked={at5a}
          onPress={()=>{marcaTodosAmarelo()}}
          checkedColor="#F3EC09"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="     • Identificar a vítima - 10 pontos"
          checked={at51a}
          onPress={()=>setResgateAmarelo(1)}
          checkedColor="#F3EC09"
        />
        <CheckBox
          title="     • Levar a vítima - 10 pontos"
          checked={at52a}
          onPress={()=>setResgateAmarelo(2)}
          checkedColor="#F3EC09"
        />
        <CheckBox
          title="     • Deixar a vítima - 10 pontos"
          checked={at53a}
          onPress={()=>setResgateAmarelo(3)}
          checkedColor="#F3EC09"
        />
        <CheckBox
          title="     • Retomar a linha - 10 pontos"
          checked={at54a}
          onPress={()=>setResgateAmarelo(4)}
          checkedColor="#F3EC09"
        />
        <CheckBox
          title="Resgate Lilás"
          checked={at5l}
          onPress={()=>{marcaTodosLilas()}}
          checkedColor="#FC03AD"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <CheckBox
          title="     • Identificar a vítima - 10 pontos"
          checked={at51l}
          onPress={()=>setResgateLilas(1)}
          checkedColor="#FC03AD"
        />
        <CheckBox
          title="     • Levar a vítima - 10 pontos"
          checked={at52l}
          onPress={()=>setResgateLilas(2)}
          checkedColor="#FC03AD"
        />
        <CheckBox
          title="     • Deixar a vítima - 10 pontos"
          checked={at53l}
          onPress={()=>setResgateLilas(3)}
          checkedColor="#FC03AD"
        />
        <CheckBox
          title="     • Retomar a linha - 10 pontos"
          checked={at54l}
          onPress={()=>setResgateLilas(4)}
          checkedColor="#FC03AD"
        />
        <CheckBox
          title="Finalizar a prova - 50 pontos"
          checked={at6}
          onPress={()=>setAt6(!at6)}
          checkedColor="#1F7A01"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <View style={styles.gaap}>
          <Text style={styles.texto}>  Gap - 5 pontos</Text>
          <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
<Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
          <Button
            title="  -  "
            onPress={()=>diminuiGap()}
          />
          <Text style={styles.text}>  {gap}  </Text>
          <Button
            title="  +  "
            onPress={()=>aumentaGap()}
          />
        </View>
        <View style={styles.botao}>
          <Button
            title="Resultado"
            onPress={()=>click()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize:30,
    fontWeight:'bold',
    color:'black',
  },
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  botao: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    marginBottom:150,
  },
  text: {
    fontSize:20,
    color:'black',
    marginTop:7,
  },
  texto: {
    fontSize:15,
    color:'black',
    marginTop:7,
  },
  gaap: {
    flexDirection:'row',
    padding:5,
    marginTop:5,
    marginRight:10,
    marginLeft:10,
    backgroundColor:'#fafafa',
    justifyContent:'space-between',
    borderRadius:3,
  },
});

