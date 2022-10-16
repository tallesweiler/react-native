import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaConfig from './componentes/TelaConfig';
import TelaJogo from './componentes/TelaJogo'

const Menus=createBottomTabNavigator()
 
export default function CaraCoroa() {
  return (
    <NavigationContainer theme={temaMenu}>
      <Menus.Navigator initialRouteName='Jogo'>
        <Menus.Screen
          name='Jogo'
          component={TelaJogo}
        />
        <Menus.Screen
          name='Configuraçoes'
          component={TelaConfig}
        />
      </Menus.Navigator>
    </NavigationContainer>
  )
}

const temaMenu = {
  dark:false,
  colors: {
    primary:'rgb(255,255,255)',
    background:'rgb(0,0,0)',
    card:'rgb(0,0,0)',
    text:'rgb(255,255,255)',
    border:'rgb(255,255,255)',
    notification:'rgb(255,0,0)',
  }
}
