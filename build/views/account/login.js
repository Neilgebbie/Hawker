//dependencies
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

//global stylesheet
import styles from '../../styles/index.js'

    /*
    TO DO:
        STYLE
        FORGOT PASSWORD button/form
        CREATE ACCOUNT BUTTON
    */

export class Login extends React.Component {
    static navigationOptions = {
      title: "Login",
      header: null      
    };
    render() {
      const { navigate } = this.props.navigation;
      const loginStyles =  StyleSheet.create({
        blue: {
          backgroundColor: '#124567'
        }
      })
      return (
        <View style={loginStyles.blue}>        
          <Text>Username</Text>
            <TextInput style={styles.textInput}/>
          <Text>Password</Text>
            <TextInput style={styles.textInput}/> 
            <Button
              onPress={() => navigate('Main')}
              title="Login"
              color="#e15d64"
              style={styles.theButton}
              accessibilityLabel="Login"
            /> 
            <Text>OR</Text>
            <Button
              onPress={() => navigate('CreateAccount')}
              title="Create Account"
              color="#e15d64"
              style={styles.theButton}
              accessibilityLabel="Create Account"
            /> 
      </View>
      );
    }
  }