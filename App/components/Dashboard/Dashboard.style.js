import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mediumturquoise',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        backgroundColor: 'paleturquoise',
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnPress: {
        height: '100%',
        width: '50%',
        backgroundColor: 'mediumturquoise',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnNormal: {
        height: '100%',
        width: '50%',
        backgroundColor: 'paleturquoise',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'paleturquoise',
        shadowColor: 'teal',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,

        elevation: 4,
    },
    textButton: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'teal'
    },
    textInput: {
        fontSize: 18,
        color: 'black',
        marginBottom: 20,
        backgroundColor: 'white',
        width: '50%',
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 0,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    searchIcon: {
        backgroundColor: 'white',
        height: 45,
        width: 50,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon: {
        fontSize: 25
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'teal',
        marginTop: 10
    },
    textAddress: {
        paddingTop: 3,
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '80%',
        height: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {

    }

});