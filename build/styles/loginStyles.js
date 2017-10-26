import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

// merge into file
const winWidth = Dimensions.get('window').width
const ninefiveW = winWidth * 0.95
const nineW = winWidth * 0.9
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
    wrapper: {
        backgroundColor: '#e15d64',
        paddingTop: 100,
        flex: 1,
        alignItems: 'center'
    },
    theLogo: {
        marginBottom: 50
    }
});