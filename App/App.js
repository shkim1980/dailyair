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
    Button,
    TouchableOpacity,
} from 'react-native'

import api from './api/OpenAQ';
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
        //function sleep(seconds){
        //    var waitUntil = new Date().getTime() + seconds*999;
        //    while(new Date().getTime() < waitUntil) true;
        //}

        //sleep(1) // sleep for 2 seconds
        SplashScreen.hide()
    }

    constructor(props){
        super(props);
        this.state = {
            results: [],
            resultsCity: [],
            latitude: null,
            longitude: null,
            sensorType: '',
            pUnit: '',
            pValue: '',
            error: null,
        }
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
            });
        },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );


    }

    queryData(){
        api.getResults(query=`${this.state.latitude},+${this.state.longitude}`)
            .then((res) => {
                this.setState({
                    results: res.results,
                    resultsCity: res.results[0].city,
                    sensorType: res.results[0].parameter,
                    pUnit: res.results[0].unit,
                    pValue: res.results[0].value,
                })
            }).catch((error)=>{
                console.log("error with this setting" + error.message);
            });
    }



    render() {
        console.log("Results: ", this.state.results);
        console.log("errors: ", this.state.error);
        console.log(this.state.latitude);
        console.log(this.state.longitude);

        console.log(this.state.sensorType);
        console.log(this.state.pValue);
        console.log(this.state.pUnit);

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    DailyAir
                </Text>
                <Text style={styles.instructions}>
                    Closest Sensor Proximity : {"\n"+ this.state.resultsCity }
                    {"\n Particulate In the Area: " +
                        this.state.sensorType + " " +
                        this.state.pValue + " " +
                        this.state.pUnit
                    }
                </Text>
                <Button
                    onPress = { (e) => {this.queryData();}}
                    title = "Get My Air"
                />
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

