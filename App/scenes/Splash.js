import React, { Component } from 'react';
import { Image, View } from 'react-native';


import styles from '../styles';

export default class SplashScreen extends Component {
    render() {
        // return the components
        return(
            <View sytle = {styles.splash}>
                <Logo style={styles.splashImage} />
            </View>
        );
    }//end render
} // end splashscreen
