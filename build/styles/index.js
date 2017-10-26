import { StyleSheet } from 'react-native'
import Dimensions from 'Dimensions'

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

// ...styles.contentContainer, ...styles.friendContainer

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeFade: {
        backgroundColor: '#e15d64',
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    friendContainer: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    friends:{
        width: twofiveW,
        height: twofiveW
    },
    theButton: {
        borderRadius:10,
        borderWidth: 2,
        backgroundColor: '#444',
        borderColor: '#e15d64',
        overflow: 'hidden'
    },
    textInput: {
        width: nineW,
        height: 50, 
        fontSize: 15,
        borderColor: '#fff', 
        color: '#fff',
        marginBottom: 25,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    textLabel: {
        paddingLeft: 10,
        marginBottom:10,
        color: '#fff',
        fontSize:15
    },
    main: {
        position: 'relative'
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: winWidth,
        display: 'flex',
        flexDirection: 'row'
    },
    bottom: {
        flex: 0.25,
        height:50,
        backgroundColor: '#999'
    },
    theMap: {
        width: winWidth,
        height: (winHeight - 65)
    },
    mapmarker: {
        height: 100,
        width: 100,
        backgroundColor: 'green'
    },
    credit: {
        translateY: - winHeight
    }
});