//dependencies
import React from 'react'
import { ScrollView, Text, TextInput, Button } from 'react-native';

//global stylesheet
import styles from '../styles/index.js'

export class Profile extends React.Component {
    //create a tiled lists of friends

    static navigationOptions = {
        title: "Profile"
    };
    render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>        
        <Text>Profile</Text>
        </ScrollView>
        );
    }
}