//dependencies
import React from 'react'
import { ScrollView, Text, TextInput, Button } from 'react-native'

//global stylesheet
import styles from '../../styles/index.js'

    /*
    TO DO:
        THINK ABOUT THE DATA FIELDS FOR SIGN UP
        STYLE
        MAILING LIST BUTTON
        SOCIAL LOGIN FEATURE?
        ANONYMOUS READ ONLY LOGIN?
    */

export class CreateAccount extends React.Component {
    static navigationOptions = {
        title: "Create Account"
    };    
    render() {
        const { navigate } = this.props.navigation;        
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>        
            <Text>Username</Text>
                <TextInput style={styles.textInput}/>
            <Text>Password</Text>
                <TextInput style={styles.textInput}/> 
                <Text>Re-enter Password</Text>
                <TextInput style={styles.textInput}/>
            <Text>Another Field</Text>
                <TextInput style={styles.textInput}/> 
            <Text>Another Field</Text>
                <TextInput style={styles.textInput}/> 
            <Text>Another Field</Text>
                <TextInput style={styles.textInput}/> 
            
            <Text>You will get an email to confirm your account. If you don't confirm your account within 48 hours we might delete your account.</Text>
            <Button
                onPress={() => navigate('Instructions')}
                title="Instructions"
                color="#e15d64"
                style={styles.theButton}
                accessibilityLabel="Instructions"
            /> 
        </ScrollView>
        );
    }
}