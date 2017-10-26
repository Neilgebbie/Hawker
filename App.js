//dependencies
import React from 'react'
import { Button, View, Image, Text, Linking, Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'

//Login + CreateAccount
import { Login } from './build/views/account/login.js'
import { CreateAccount } from './build/views/account/CreateAccount.js'
import { Instructions } from './build/views/static/Instructions.js'

//main app screens
import { Main } from './build/views/Main.js'
import { Photo } from './build/views/Photo.js'
import { Search } from './build/views/Search.js'
import { Friends } from './build/views/Friends.js'
import { Profile } from './build/views/Profile.js'


//global stylesheet
import styles from './build/styles/index.js'

/*
TO DO:

Animate button

*/

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome",
    header: null
  };
  
  render() {
    const { navigate } = this.props.navigation  
    return (
      <Animated.View style={styles.container}>
        <View style={styles.container}> 
          <Image
            resizeMode={Image.resizeMode.center}
            source={require('./build/img/hawker-logo.png')} 
          />
          <Button
            onPress={() => navigate('Login')}
            title="Get Started..."
            color="#e15d64"
            style={styles.theButton}
            accessibilityLabel="Click to Login"
          />
        </View>
        <View style={{flex: .1}}>         
          <Text style={{color: '#e15d64'}}
            onPress={() => Linking.openURL('http://neilgebbie.com')}>APP BY NEIL
          </Text>    
        </View>  
      </Animated.View>
    );  
  }
}

export const HawkerApp = StackNavigator({
    Home: { screen: Instructions },
    //login + signup process
    Login: { screen: Login },
    CreateAccount: { screen: CreateAccount },
    Instructions: {screen: Instructions },
    //operational screens
    Main: {screen: Main},
    Photo: {screen: Photo},
    Search: {screen: Search},
    Friends: {screen: Friends},
    Profile: {screen: Profile}
  },{ 
    headerMode: 'screen' 
  }
);

export default class App extends React.Component {
  render() {
    return <HawkerApp />;
  }
}