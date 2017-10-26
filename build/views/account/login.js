//dependencies
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

//global stylesheet
import styles from '../../styles/index.js'

export class Login extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = {
      title: "Login"
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>        
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