//dependencies
import React from 'react'
import { ScrollView, Text } from 'react-native'

//global stylesheet
import styles from '../styles/index.js'

    /*
    TO DO:
        PROFILE INFORMATION LIST
        ABILITY TO CHANGE INFORMATION HERE
        DELETE ACCOUNT FEATURE
        DIGITAL SIGN THE REQUEST?
    */

export class Profile extends React.Component {

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