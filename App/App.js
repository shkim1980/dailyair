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

import api from './api/OpenAQ';
//import Test from './test/Test';
//import GetLocation from './modules/GetLocation';
import GetLocation from './modules/GetLocation';

import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<Props>{


    componentDidMount(){
        //navigator.geolocation.getCurrentPosition(getLocation.success, getLocation.error, getLocation.options);

        // quick and dirty pesudo doing work while splash screen is displayed
        function sleep(seconds){
            var waitUntil = new Date().getTime() + seconds*999;
            while(new Date().getTime() < waitUntil) true;
        }

        sleep(1) // sleep for 2 seconds
        SplashScreen.hide()
    }

    constructor(props){
        super(props);
        this.state = {
            results: [],
            resultsCity: [],
        }
    }

    componentWillMount(){
        api.getResults().then((res) => {
            this.setState({
                results: res.results,
                resultsCity: res.results[0].city,
            })
        });
    }

    render() {
        console.log("Results: ", this.state.results);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    DailyAir
                </Text>
                <Text style={styles.instructions}>
                    Daily air quality reports in your area... { this.state.resultsCity }
                </Text>
                <GetLocation/>
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

