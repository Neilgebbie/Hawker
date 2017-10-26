//dependencies
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
//import Camera from 'react-native-camera';

//global stylesheet
import styles from '../styles/index.js'

    /*
    TO DO:
        OVERLAY - WITH SLIDER
        CUSTOM PHOTO BUTTON
        ETCH PHOTO
        ETCH PREVIOUS PHOTO
        DISCARD OR SAVE PHOTO
    */

export class Photo extends React.Component {
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