import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import Simples from './componentes/Simples';
import ParImpar from './componentes/Parimpar';

const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: "#C2185B",
      height: Constants.statusBarHeight,
    }
  });


export default createDrawerNavigator({
    Simples : {
        screen: ()=> 
        <View style={styles.statusBar}>
            <Simples texto="Flexivel!!"/>
        </View>,
        navigationOptions: {title:'Simples'}
    },
    ParImpar: {
        screen:()=> 
        <View style={styles.statusBar}>
            <ParImpar numero={30} />
        </View>,
        navigationOptions: {title:'Par ou Impar'}
    }
},{drawerWidth:300})