import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

const winWidth = Dimensions.get('window').width
const eightW = winWidth * .8
const sixW = winWidth * .6
const fourW = winWidth * .4
const twofiveW = winWidth * .25
const twoW = winWidth * .2

const winHeight = Dimensions.get('window').height
const eightH = winHeight * .8
const sixH = winHeight * .6
const fourH = winHeight * .4
const twoH = winHeight * .2
const oneH = winHeight * .1

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: eightW
    },
    theButton: {
        borderRadius:10,
        borderWidth: 2,
        backgroundColor: '#444',
        borderColor: '#e15d64',
        overflow: 'hidden'
    },
    textInput: {
        width: eightW,
        height: 70, 
        borderColor: 'gray', 
        marginBottom: oneH,
        borderWidth: 1
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: winWidth
    },
    bottom: {
        width: twofiveW,
        height:50,
        backgroundColor: '#999',
        float: 'left'
    }
});