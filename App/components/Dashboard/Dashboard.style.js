import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'paleturquoise',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        backgroundColor: 'paleturquoise',
        height: 50,
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnPress: {
        height:'100%',
        width:'50%',
        backgroundColor:'mediumturquoise',
        alignItems:'center',
        justifyContent:'center'
    },
    btnNormal: {
        height:'100%',
        width:'50%',
        backgroundColor:'paleturquoise',
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        // elevation:1,
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 30,
        backgroundColor: 'mediumturquoise',
        marginTop: 20
    },
    textButton: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    textInput: {
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        width: 250,
        height: 45,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    error: {
        color: 'red',
        fontSize: 10,
        fontStyle: 'italic'
    },
    registration: {
        marginTop:6,
        color: 'dodgerblue',
        textDecorationLine:'underline'
    }
});