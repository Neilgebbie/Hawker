//dependencies
import React from 'react'
import { View, Button, Text } from 'react-native'

//global stylesheet
import styles from '../styles/index.js'

//the main map
import MapView from 'react-native-maps';

    /*
    TO DO:
        REPLACE BUTTONS WITH ICONS
        MAKE THE PHOTO BUTTON BIGGER?
        PLOT LOCAL LAPSES ON MAP
        MAP MARKER STYLING?
        INITIAL LOCATION BASED ON ACCESS
        GET DATA FROM API
    */

/*
            {markers.map(marker => (
                <MapView.Marker
                    key={marker.id}
                    coordinate={{
                        latitude: marker.coordinate.latitude,
                        longitude: marker.coordinate.longitude
                    }}
                />
            ))}
*/
export class Main extends React.Component {
    static navigationOptions = {
        title: "Main"
    };
    render() {
        const { navigate } = this.props.navigation
        const LATITUDE = 51.5465329
        const LONGITUDE = -0.076268
        const markers = [{
            id: 0,
            amount: 99,
            coordinate: {
                latitude: LATITUDE,
                longitude: LONGITUDE
            },
        },{
            id: 1,
            amount: 199,
            coordinate: {
                latitude: LATITUDE + 1,
                longitude: LONGITUDE - 1
            },
        },{
            id: 2,
            amount: 285,
            coordinate: {
                latitude: LATITUDE - 1,
                longitude: LONGITUDE - 1
            },
        }];
        return (
        <View style={styles.main}>        
            <MapView
                style={styles.theMap}
                showsUserLocation={true}
                showsMyLocationButton={true}                
                initialRegion={{
                    latitude: 51.5465329,
                    longitude: -0.076268,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />      
            <MapView.Marker
                coordinate={{
                    latitude: 51.5465329,
                    longitude: -0.076268
                }}
            />
            <View style={styles.bottomNav}>
                <Button
                    onPress={() => navigate('Photo')}
                    title="Take Photo"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Take Photo"
                /> 
                <Button
                    onPress={() => navigate('Search')}
                    title="Search"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Search"
                /> 
                <Button
                    onPress={() => navigate('Friends')}
                    title="Friends"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Friends"
                /> 
                <Button
                    onPress={() => navigate('Profile')}
                    title="Me"
                    color="#e15d64"
                    style={styles.bottom}
                    accessibilityLabel="Me"
                /> 
            </View>            
        </View>
        );
    }
}