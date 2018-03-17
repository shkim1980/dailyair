/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<Props>{


    componentDidMount(){
        // quick and dirty pesudo doing work while splash screen is displayed
        function sleep(seconds){
            var waitUntil = new Date().getTime() + seconds*999;
            while(new Date().getTime() < waitUntil) true;
        }
        sleep(3) // sleep for 2 seconds
        SplashScreen.hide()
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
                DailyAir
            </Text>
            <Text style={styles.instructions}>
                Daily air quality reports in your area
            </Text>
        </View>
        );
    }
}

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

