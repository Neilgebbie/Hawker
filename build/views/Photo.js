//dependencies
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
//import Camera from 'react-native-camera';

//global stylesheet
import styles from '../styles/index.js'

export class Photo extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = {
        title: "Take Photo"
    };
    render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>        
            <Text>Photo</Text>
        </View>
        );
    }
}