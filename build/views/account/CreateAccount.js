//dependencies
import React from 'react'
import { 
    ScrollView, 
    View,
    Text, 
    TextInput, 
    Button,
    Image,
    StyleSheet     
} from 'react-native'

//global stylesheet
import styles from '../../styles/index.js'
import loginStyles from '../../styles/loginStyles.js'

    /*
    TO DO:
        THINK ABOUT THE DATA FIELDS FOR SIGN UP
        STYLE
        MAILING LIST BUTTON
        SOCIAL LOGIN FEATURE?
        ANONYMOUS READ ONLY LOGIN?
        MOVE THE STYLESHEET INTO A NEW FILE
    */

export class CreateAccount extends React.Component {
    static navigationOptions = {
        title: "Create Account"
    };    
    render() {
        const { navigate } = this.props.navigation    
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

                    <Text style={styles.textLabel}>Repeat Password</Text>
                        <TextInput style={styles.textInput}/> 
                    
                    <Text style={styles.textLabel}>E-mail</Text>
                        <TextInput style={styles.textInput}/> 

                    <Text style={styles.textLabel}>Name</Text>
                        <TextInput style={styles.textInput}/> 

                    <Text style={styles.textLabel}>Age</Text>
                        <TextInput style={styles.textInput}/> 
                </View>
                <View style={loginStyles.signUp}>
                    <Text style={styles.textLabel}>You will get an email to confirm your account.</Text>
                    <Button
                        onPress={() => navigate('Instructions')}
                        title="Sign Up"
                        color="#fff"
                        style={styles.theButton}
                        accessibilityLabel="Instructions"
                    /> 
                </View>
        </ScrollView>
        );
    }
}