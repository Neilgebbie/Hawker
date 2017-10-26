//dependencies
import React from 'react'
import { ScrollView, Text, Image } from 'react-native'

//global stylesheet
import styles from '../styles/index.js'

export class Friends extends React.Component {

    /*
    TO DO:
        CLICK THROUGH FRIENDS
        REPLACE FRIENDS WITH DYNAMIC DATA
        create a 'find friends' button?
        Create rows for the friend module 100% width - X height  
    */
    static navigationOptions = {
        title: "Friend count " + (Math.floor(Math.random() * 100) + 1)
    }; 
    render() {
    const { navigate } = this.props.navigation;

    //temporary
    const girl1 = <Image
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/girl1.jpg')} 
    />
    const girl2 = <Image
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/girl2.jpg')} 
    />
    const girl3 = <Image
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/girl3.jpg')} 
    />
    const guy1 = <Image
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/man1.jpg')} 
    />
    const guy2 = <Image
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/man2.jpg')} 
    />
    const guy3 = <Image onPress={() => navigate('Login')}
        style={styles.friends}
        resizeMode={Image.resizeMode.contain}
        source={require('../img/placeholders/profiles/man3.jpg')} 
    />
    return (
        <ScrollView contentContainerStyle={styles.friendContainer}>                
            {girl1}
            {guy2}
            {guy1}        
            {girl2}
            {girl1}
            {guy2}
            {girl3}
            {guy3}        
            {girl3}
            {girl2}
            {girl1}
            {guy2}        
            {guy1}
            {guy3}
        </ScrollView>
        );
    }
}