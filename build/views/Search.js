//dependencies
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

//global stylesheet
import styles from '../styles/index.js'

    /*
    TO DO:
        SEARCH FEATURE USING FORM AND MULTIPLE MAP VIEW INFORMATION
        THINK ABOUT FIELDS THAT WILL DISPLAY
    */

export class Search extends React.Component {
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