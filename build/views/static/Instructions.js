//dependencies
import React from 'react';
import { View, Button, Text } from 'react-native';

//global stylesheet
import styles from '../../styles/index.js'

export class Instructions extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = {
        title: "Instructions"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View>   
            <Text>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero dolor, consequat a volutpat eget, dapibus ut lacus. 
            
            Donec auctor ipsum sed libero dictum varius. 
            
            Mauris ac gravida nulla, eu laoreet elit. Phasellus pulvinar, diam sit amet accumsan molestie, sem urna efficitur nisl, a congue lacus turpis sed eros. Vivamus condimentum nibh ac lorem aliquet, eget lobortis leo interdum. In posuere eget eros at rutrum. Sed pharetra risus ac orci dapibus tristique. Nunc ipsum diam, tempus non ex non, convallis elementum purus. Nullam vitae enim turpis. 
            
            Donec eleifend nisi nisi. Duis tempor neque et pharetra tincidunt. Sed ac rhoncus nisi.`}</Text>     
            <Button
                onPress={() => navigate('Main')}
                title="Got it"
                color="#e15d64"
                style={styles.theButton}
                accessibilityLabel="Got it"
            /> 
        </View>
        );
    }
}