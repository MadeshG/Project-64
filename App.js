import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './Screens/Homescreen';

export default class App extends Component{
render(){
  return(
    <View><Homescreen/></View>
  )
}
}

