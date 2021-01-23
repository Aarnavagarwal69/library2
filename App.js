import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Welcomescreen from "./screens/welcomescreen";
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Apptabnav} from './components/apptabnav';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Appdrawernav} from './components/appdrawernav';


export default function App() {
  return (
    
    <Appcontainer/>
   
  );
}

const switchNavigator = createSwitchNavigator({
  Welcomescreen:{screen:Welcomescreen}, 
  Drawer:{screen:Appdrawernav}
})


const Appcontainer = createAppContainer(switchNavigator)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
