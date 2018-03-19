import React, { Component } from 'react';
import {
    Text,
} from 'react-native'

class Test extends Component {
    render(){
        console.log("this is a logger from the test class");
        return(
            <Text> hi </Text>
        );
    }
}

export default Test;
