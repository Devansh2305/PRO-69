import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import scanScreen from './screens/scanScreen';

export default class App extends Component {
 render(){
   return(
    <AppContainer/>
   )
 }
}
const TabNavigator= createBottomTabNavigator({
  Scan:{screen:scanScreen}
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
