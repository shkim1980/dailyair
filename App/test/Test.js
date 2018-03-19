import React, { Component } from 'react';
import {
    Text,
} from 'react-native'

class Test extends Component {
    render(){
        console.log("this is a logger");
        return(
            <Text> hi </Text>
        );
    }
}

export default Test;
