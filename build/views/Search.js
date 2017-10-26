//dependencies
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

//global stylesheet
import styles from '../styles/index.js'

export class Search extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = {
        title: "Search"
    };
    render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>        
            <Text>Search</Text>
        </View>
        );
    }
}