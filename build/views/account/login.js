//dependencies
import React from 'react'
import { 
  View,
  ScrollView, 
  Text, 
  TextInput, 
  Button, 
  Image
} from 'react-native'

//global stylesheet
import styles from '../../styles/index.js'
import loginStyles from '../../styles/loginStyles.js'

    /*
    TO DO:
        STYLE buttons
        FORGOT PASSWORD button/form
        CREATE ACCOUNT BUTTON
        Validation
    */

export class Login extends React.Component {
    static navigationOptions = {
      title: "Login",
      header: null      
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView contentContainerStyle={loginStyles.wrapper}>
          <Image
            resizeMode={Image.resizeMode.center}
            style={loginStyles.theLogo}
            source={require('../../img/hawker-logo-white.png')} 
          />        
            <View>
              <Text style={styles.textLabel}>Username</Text>
                <TextInput style={styles.textInput}/>
              <Text style={styles.textLabel}>Password</Text>
                <TextInput style={styles.textInput}/> 
                <Button
                  onPress={() => navigate('Main')}
                  title="Login"
                  color="#fff"
                  style={styles.theButton}
                  accessibilityLabel="Login"
                /> 
                <Button
                  onPress={() => navigate('CreateAccount')}
                  title="Create Account"
                  color="#fff"
                  style={styles.theButton}
                  accessibilityLabel="Create Account"
                /> 
                <Button
                  onPress={() => navigate('ForgotPassword')}
                  title="Forgot Password?"
                  color="#fff"
                  style={styles.theButton}
                  accessibilityLabel="Forgot Password"
                /> 
            </View>
      </ScrollView>
      );
    }
  }