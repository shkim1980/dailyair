import React, { Component } from 'react';

import styles from '../styles';

import { Platform, StyleSheet, Text, View } from 'react-native';

type Props = {};

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Splash extends Component {
    render() {
        // return the components
//        return(
//            <View sytle = {styles.splash}>
//                <Logo style={styles.splashImage} />
//                
//            </View>
//        );

//        return (
//          <View style={styles.container}>
//            <Text style={styles.welcome}>
//                DailyAir
//            </Text>
//            <Text style={styles.instructions}>
//                Daily air quality reports in your area
//            </Text>
//        </View>
//        );

    }//end render
} // end splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
