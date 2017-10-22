//dependencies
import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

//Login + CreateAccount
import { Login } from './build/views/login.js';
import { CreateAccount } from './build/views/CreateAccount.js';
import { Instructions } from './build/views/Instructions.js';

//main app screens
import { Main } from './build/views/Main.js';


//global stylesheet
import styles from './build/styles/index.js'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;    
    return (
      <View style={styles.container}>
      <Text>Welcome to...</Text>
        <Image
          style={styles.logo}
          resizeMode={Image.resizeMode.contain}
          source={require('./build/img/hawker-logo.png')} 
        />
        <Button
          onPress={() => navigate('Login')}
          title="Get Started..."
          color="#e15d64"
          style={styles.theButton}
          accessibilityLabel="Learn more about this purple button"
        />      
      </View>
    );  
  }
}

export const HawkerApp = StackNavigator({
  Home: { screen: HomeScreen },
  //login + signup process
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Instructions: {screen: Instructions },
  //operational screens
  Main: {screen: Main}
});

export default class App extends React.Component {
  render() {
    return <HawkerApp />;
  }
}