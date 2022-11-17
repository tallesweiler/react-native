import React, {useState} from 'react';
import {Alert, SafeAreaView,StyleSheet,Text,View,ScrollView} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import Globais from './Globais'

export default function Equipe1() {
    const [at1,setAt1]=useState(Globais.jat1)
    const [at2,setAt2]=useState(Globais.jat2)
    const [at3,setAt3]=useState(Globais.jat3)
    const [at5v,setAt5v]=useState(Globais.jat5v)
    const [at51v,setAt51v]=useState(Globais.jat51v)
    const [at52v,setAt52v]=useState(Globais.jat52v)
    const [at53v,setAt53v]=useState(Globais.jat53v)
    const [at54v,setAt54v]=useState(Globais.jat54v)
    const [at5a,setAt5a]=useState(Globais.jat5a)
    const [at51a,setAt51a]=useState(Globais.jat51a)
    const [at52a,setAt52a]=useState(Globais.jat52a)
    const [at53a,setAt53a]=useState(Globais.jat53a)
    const [at54a,setAt54a]=useState(Globais.jat54a)
    const [at5l,setAt5l]=useState(Globais.jat5l)
    const [at51l,setAt51l]=useState(Globais.jat51l)
    const [at52l,setAt52l]=useState(Globais.jat52l)
    const [at53l,setAt53l]=useState(Globais.jat53l)
    const [at54l,setAt54l]=useState(Globais.jat54l)
    const [at6,setAt6]=useState(Globais.jat6)
    const [gap,setGap]=useState(Globais.jgap)
    const [teste,setTeste]=useState(Globais.teste10)

    function click() {
        let res=0
        
        if (at1)
            res+=100
        if (at2)
            res+=200
        if (at3) 
            res+=300
        if (at51v)
            res+=100
        if (at52v) 
            res+=100
        if (at53v)
            res+=100
        if (at54v)
            res+=100
        if (at5v)
            res+=400
        if (at51a)
            res+=100
        if (at52a) 
            res+=100
        if (at53a)
            res+=100
        if (at54a)
            res+=100
        if (at5a)
            res+=400
        if (at51l)
            res+=100
        if (at52l) 
            res+=100
        if (at53l)
            res+=100
        if (at54l)
            res+=100
        if (at5l)
            res+=400
        if (at6) 
            res+=500
        res+=50*gap
        res+=(9-minutes)*60+(60-seconds)

        Alert.alert(
            "Resultado", Globais.resultado10 + "\nVoce marcou " + res + " pontos!\n"
        )
    }

    function setResgateVermelho(num) {
        if (num===1) {
            setAt51v(!at51v)
            Globais.jat51v=!at51v
            if (!at51v)
                marcarTempo('Identificou a vítima (vermelho)')
            if(!at51v && at52v && at53v && at54v)
                todosMarcadosVermelho(1)
            else 
                todosMarcadosVermelho(0)
        } 
        else if (num===2) {
            setAt52v(!at52v)
            Globais.jat52v=!at52v
            if (!at52v)
                marcarTempo('Levou a vítima (vermelho)')
            if(at51v && !at52v && at53v && at54v)
                todosMarcadosVermelho(1)
            else 
                todosMarcadosVermelho(0)
        }
        else if (num===3) {
            setAt53v(!at53v)
            Globais.jat53v=!at53v
            if (!at53v)
                marcarTempo('Deixou a vítima (vermelho)')
            if(at51v && at52v && !at53v && at54v)
                todosMarcadosVermelho(1)
            else 
                todosMarcadosVermelho(0)
        }
        else if (num===4) {
            setAt54v(!at54v)
            Globais.jat54v=!at54v
            if (!at54v)
                marcarTempo('Retomou a linha (vermelho)')
            if(at51v && at52v && at53v && !at54v)
                todosMarcadosVermelho(1)
            else 
                todosMarcadosVermelho(0)
        }
    }
    function todosMarcadosVermelho(aux) {
        if (aux===1) {
            setAt5v(true)
            Globais.jat5v=true
        }  
        else {
            setAt5v(false)
            Globais.jat5v=false
        }    
    }
    function marcaTodosVermelho() {
        if (at5v) {
            setAt5v(false)
            setAt51v(false)
            setAt52v(false)
            setAt53v(false)
            setAt54v(false)
            Globais.jat5v=false
            Globais.jat51v=false
            Globais.jat52v=false
            Globais.jat53v=false
            Globais.jat54v=false
        }
        else {
            setAt5v(true)
            setAt51v(true)
            setAt52v(true)
            setAt53v(true)
            setAt54v(true)
            Globais.jat5v=true
            Globais.jat51v=true
            Globais.jat52v=true
            Globais.jat53v=true
            Globais.jat54v=true
            marcarTempo('Concluiu o resgate (vermelho)')
        }
    }

    function setResgateAmarelo(num) {
        if (num===1) {
            setAt51a(!at51a)
            Globais.jat51a=!at51a
            if (!at51a)
                marcarTempo('Identificou a vítima (amarelo)')
            if(!at51a && at52a && at53a && at54a)
                todosMarcadosAmarelo(1)
            else 
                todosMarcadosAmarelo(0)
        } 
        else if (num===2) {
            setAt52a(!at52a)
            Globais.jat52a=!at52a
            if (!at52a)
                marcarTempo('Levou a vítima (amarelo)')
            if(at51a && !at52a && at53a && at54a)
                todosMarcadosAmarelo(1)
            else 
                todosMarcadosAmarelo(0)
        }
        else if (num===3) {
            setAt53a(!at53a)
            Globais.jat53a=!at53a
            if (!at53a)
                marcarTempo('Deixou a vítima (amarelo)')
            if(at51a && at52a && !at53a && at54a)
                todosMarcadosAmarelo(1)
            else 
                todosMarcadosAmarelo(0)
        }
        else if (num===4) {
            setAt54a(!at54a)
            Globais.jat54a=!at54a
            if (!at54a)
                marcarTempo('Retomou a linha (amarelo)')
            if(at51a && at52a && at53a && !at54a)
                todosMarcadosAmarelo(1)
            else 
                todosMarcadosAmarelo(0)
        }
    }
    function todosMarcadosAmarelo(aux) {
        if (aux===1) {
            setAt5a(true)
            Globais.jat5a=true
        }   
        else {
            setAt5a(false)
            Globais.jat5a=false
        }
    }
    function marcaTodosAmarelo() {
        if (at5a) {
            setAt5a(false)
            setAt51a(false)
            setAt52a(false)
            setAt53a(false)
            setAt54a(false)
            Globais.jat5a=false
            Globais.jat51a=false
            Globais.jat52a=false
            Globais.jat53a=false
            Globais.jat54a=false
        }
        else {
            setAt5a(true)
            setAt51a(true)
            setAt52a(true)
            setAt53a(true)
            setAt54a(true)
            Globais.jat5a=true
            Globais.jat51a=true
            Globais.jat52a=true
            Globais.jat53a=true
            Globais.jat54a=true
            marcarTempo('Concluiu o resgate (amarelo)')
        }
    }

    function setResgateLilas(num) {
        if (num===1) {
            setAt51l(!at51l)
            Globais.jat51l=!at51l
            if (!at51l)
                marcarTempo('Identificou a vítima (lilás)')
            if(!at51l && at52l && at53l && at54l)
                todosMarcadosLilas(1)
            else 
                todosMarcadosLilas(0)
        } 
        else if (num===2) {
            setAt52l(!at52l)
            Globais.jat52l=!at52l
            if (!at52l)
                marcarTempo('Levou a vítima (lilás)')
            if(at51l && !at52l && at53l && at54l)
                todosMarcadosLilas(1)
            else 
                todosMarcadosLilas(0)
        }
        else if (num===3) {
            setAt53l(!at53l)
            Globais.jat53l=!at53l
            if (!at53l)
                marcarTempo('Deixou a vítima (lilás)')
            if(at51l && at52l && !at53l && at54l)
                todosMarcadosLilas(1)
            else 
                todosMarcadosLilas(0)
        }
        else if (num===4) {
            setAt54l(!at54l)
            Globais.jat54l=!at54l
            if (!at54l)
                marcarTempo('Retomou a linha (lilás)')
            if(at51l && at52l && at53l && !at54l)
                todosMarcadosLilas(1)
            else 
                todosMarcadosLilas(0)
        }
    }
    function todosMarcadosLilas(aux) {
        if (aux===1) {
            setAt5l(true)
            Globais.jat5l=true
        }   
        else {
            setAt5l(false)
            Globais.jat5l=false
        }     
    }
    function marcaTodosLilas() {
        if (at5l) {
            setAt5l(false)
            setAt51l(false)
            setAt52l(false)
            setAt53l(false)
            setAt54l(false)
            Globais.jat5l=false
            Globais.jat51l=false
            Globais.jat52l=false
            Globais.jat53l=false
            Globais.jat54l=false
        }
        else {
            setAt5l(true)
            setAt51l(true)
            setAt52l(true)
            setAt53l(true)
            setAt54l(true)
            Globais.jat5l=true
            Globais.jat51l=true
            Globais.jat52l=true
            Globais.jat53l=true
            Globais.jat54l=true
            marcarTempo('Concluiu o resgate (lilás)')
        }
    }

    function aumentaGap() {
        setGap(gap+1)
        Globais.jgap=Globais.jgap+1
        marcarTempo('Passou o gap')
    }
    function diminuiGap() {
        if (gap>0) {
            setGap(gap-1)
            Globais.jgap=Globais.jgap-1
        }
            
    }

    function setarAt1() {
        setAt1(!at1)
        Globais.jat1=!at1
        if (!at1)
            marcarTempo('Passou o portal')
    }
    function setarAt2() {
        setAt2(!at2)
        Globais.jat2=!at2
        if (!at2)
            marcarTempo('Fez a volta completa')
    }
    function setarAt3() {
        setAt3(!at3)
        Globais.jat3=!at3
        if (!at3)
            marcarTempo('Desviou do obstáculo')
    }
    function setarAt6() {
        setAt6(!at6)
        Globais.jat6=!at6
        if (!at6) {
            marcarTempo('Finalizou a prova')
        }
            
    }

    const [seconds,setSeconds]=useState(Globais.seconds10)
    const [minutes,setMinutes]=useState(Globais.minutes10)
    const [customInterval,setCustomInterval]=useState(null);
    const [isPaused,setIsPaused]=useState(true)
  
    async function espera(tmp) {
        function tempo(ms) {
          return new Promise(resolve=>setTimeout(resolve,ms))
        }
        await tempo(tmp)
    }
  
    async function startTimer() {
      consertaStart()
      await espera(1)

      if (customInterval!=null && !isPaused)
        return
      
      setCustomInterval(
        setInterval(()=>{
          changeTime();
        },1000)
      )
  
      setIsPaused(false)
    }
  
    function stopTimer() {
      if (customInterval) {
        setIsPaused(true)
        clearInterval(customInterval)
      }
      marcarTempo('Terminou a prova')
    }
  
    function clear() {
      if (customInterval) {
        setIsPaused(true)
        clearInterval(customInterval)
      }
      setSeconds(0)
      Globais.seconds10=0
      setMinutes(0)
      Globais.minutes10=0
      setCustomInterval(null)
      setIsPaused(true)
    }
  
    function changeTime() {
      setSeconds((prevState)=>{
        if (prevState+1==60) {
          setMinutes((prevState)=>{
            Globais.minutes10+=1
            return prevState+1
          })
          Globais.seconds10=0
          return 0
        }
        if (Globais.minutes10==10) {
            stopTimer()
            return 0
        }
        Globais.seconds10+=1
        return prevState+1
      })
    }

    function marcarTempo(atv) {
        if (minutes<10 && seconds>9)
            Globais.resultado10+=atv+' aos 0'+minutes+':'+seconds+'\n'
        else if (minutes>9 && seconds<10)
            Globais.resultado10+=atv+' aos '+minutes+':0'+seconds+'\n'
        else
            Globais.resultado10+=atv+' aos 0'+minutes+':0'+seconds+'\n'
    }    

    function limparResultado() {
        setAt1()
        setAt2()
        setAt3()
        setAt6()
        setAt51v()
        setAt52v()
        setAt53v()
        setAt54v()
        setAt5v()
        setAt51a()
        setAt52a()
        setAt53a()
        setAt54a()
        setAt5a()
        setAt51l()
        setAt52l()
        setAt53l()
        setAt54l()
        setAt5l()
        setGap(0)
        Globais.jat1=
        Globais.jat2=
        Globais.jat3=
        Globais.jat6=
        Globais.jat51v=
        Globais.jat52v=
        Globais.jat53v=
        Globais.jat54v=
        Globais.jat5v=
        Globais.jat51a=
        Globais.jat52a=
        Globais.jat53a=
        Globais.jat54a=
        Globais.jat5a=
        Globais.jat51l=
        Globais.jat52l=
        Globais.jat53l=
        Globais.jat54l=
        Globais.jat5l=
        Globais.jgap=0
        Globais.resultado10=''
        clear()
    }

    function consertaStart() {
        setTeste()
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titulo}>{minutes<10 ? '0'+minutes : minutes}:{seconds<10 ? '0'+seconds : seconds}</Text>
                    <View style={styles.botaoContainer}>
                        {
                            isPaused ? 
                            <Button
                                title="Iniciar"
                                onPress={startTimer}
                            /> :
                            <Button
                                title="Parar"
                                onPress={stopTimer}
                            />
                        }
                        <Button
                        title="Zerar"
                        onPress={clear}
                        />
                    </View>
                </View>
                <CheckBox
                    title="Passar o portal - 100 pontos"
                    checked={at1}
                    onPress={()=>setarAt1()}
                    checkedColor="#1F7A01"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                <CheckBox
                    title="Volta Completa - 200 pontos"
                    checked={at2}
                    onPress={()=>setarAt2()}
                    checkedColor="#1F7A01"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                <CheckBox
                    title="Desvio do obstáculo - 300 pontos"
                    checked={at3}
                    onPress={()=>setarAt3()}
                    checkedColor="#1F7A01"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                <CheckBox
                    title="Finalizar a prova - 500 pontos"
                    checked={at6}
                    onPress={()=>setarAt6()}
                    checkedColor="#1F7A01"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                <CheckBox
                    title="Resgate Lilás - 800 pontos"
                    checked={at5l}
                    onPress={()=>{marcaTodosLilas()}}
                    checkedColor="#FC03AD"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                { 
                !at5l ? (
                    <View>
                        <CheckBox
                            title="     • Identificar a vítima - 100 pontos"
                            checked={at51l}
                            onPress={()=>setResgateLilas(1)}
                            checkedColor="#FC03AD"
                        />
                        <CheckBox
                            title="     • Levar a vítima - 100 pontos"
                            checked={at52l}
                            onPress={()=>setResgateLilas(2)}
                            checkedColor="#FC03AD"
                        />
                        <CheckBox
                            title="     • Deixar a vítima - 100 pontos"
                            checked={at53l}
                            onPress={()=>setResgateLilas(3)}
                            checkedColor="#FC03AD"
                        />
                        <CheckBox
                            title="     • Retomar a linha - 100 pontos"
                            checked={at54l}
                            onPress={()=>setResgateLilas(4)}
                            checkedColor="#FC03AD"
                        />
                    </View>
                    ) : null
                }
                <CheckBox
                    title="Resgate Vermelho - 800 pontos"
                    checked={at5v}
                    onPress={()=>{marcaTodosVermelho()}}
                    checkedColor="#F31009"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                { 
                !at5v ? (
                    <View>
                        <CheckBox
                            title="     • Identificar a vítima - 100 pontos"
                            checked={at51v}
                            onPress={()=>setResgateVermelho(1)}
                            checkedColor="#F31009"
                        />
                        <CheckBox
                            title="     • Levar a vítima - 100 pontos"
                            checked={at52v}
                            onPress={()=>setResgateVermelho(2)}
                            checkedColor="#F31009"
                        />
                        <CheckBox
                            title="     • Deixar a vítima - 100 pontos"
                            checked={at53v}
                            onPress={()=>setResgateVermelho(3)}
                            checkedColor="#F31009"
                        />
                        <CheckBox
                            title="     • Retomar a linha - 100 pontos"
                            checked={at54v}
                            onPress={()=>setResgateVermelho(4)}
                            checkedColor="#F31009"
                        />
                    </View>
                    ) : null
                }
                <CheckBox
                    title="Resgate Amarelo - 800 pontos"
                    checked={at5a}
                    onPress={()=>{marcaTodosAmarelo()}}
                    checkedColor="#F3EC09"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                />
                { 
                !at5a ? (
                    <View>
                        <CheckBox
                            title="     • Identificar a vítima - 100 pontos"
                            checked={at51a}
                            onPress={()=>setResgateAmarelo(1)}
                            checkedColor="#F3EC09"
                        />
                        <CheckBox
                            title="     • Levar a vítima - 100 pontos"
                            checked={at52a}
                            onPress={()=>setResgateAmarelo(2)}
                            checkedColor="#F3EC09"
                        />
                        <CheckBox
                            title="     • Deixar a vítima - 100 pontos"
                            checked={at53a}
                            onPress={()=>setResgateAmarelo(3)}
                            checkedColor="#F3EC09"
                        />
                        <CheckBox
                            title="     • Retomar a linha - 100 pontos"
                            checked={at54a}
                            onPress={()=>setResgateAmarelo(4)}
                            checkedColor="#F3EC09"
                        />
                    </View>
                    ) : null
                }
                <View style={styles.gaap}>
                    <Text style={styles.texto}>  Gap - 50 pontos</Text>
                    <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
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
                <View style={styles.container}>
                    <Button
                        title="Resultado"
                        onPress={()=>click()}
                    />
                    <View style={{marginTop:50}}>
                        <Button
                            title="Limpar resultado"
                            onPress={()=>limparResultado()}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    botao: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
        marginBottom:10,
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
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fafafa",
        marginBottom:10,
    },
    titulo: {
        fontSize:30,
        fontWeight:'bold',
        color:'black',
    },
    botaoContainer: {
        width:"50%",
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
    },
});
    
    