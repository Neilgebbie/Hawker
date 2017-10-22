//dependencies
import React from 'react';
import { View, Button, Text } from 'react-native';

//global stylesheet
import styles from '../styles/index.js'

//the main map
import MapView from 'react-native-maps';

export class Main extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = {
        title: "Main"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.main}>        
            <Text>Main</Text>   
            <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
            <div style={styles.bottomNav}>
                <Button
                    onPress={() => navigate('TakePhoto')}
                    title="Take Photo"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Take Photo"
                /> 
                <Button
                    onPress={() => navigate('Find')}
                    title="Find"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Find"
                /> 
                <Button
                    onPress={() => navigate('Friends')}
                    title="Friends"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Friends"
                /> 
                <Button
                    onPress={() => navigate('Me')}
                    title="Me"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Me"
                /> 
            </div>
        </View>
        );
    }
}