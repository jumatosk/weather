import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    infoView: {
        flex: 1,
        justifyContent: 'center'
    },
    city: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#8194F5',
    },
    tempView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    temp: {
        color: '#8194F5',
        fontSize: 28,
        marginLeft: 10
    },
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    warning: {
        fontSize: 30,
        color: 'black',
        marginTop: 50
    }
})