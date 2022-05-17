import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'mediumturquoise',
        height: 720,
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
        position: 'absolute',
        right: 0,
        top: '60%',
        right: 20,
        width: 75,
        height: 75,
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
        width: '90%',
        height: 700,
        backgroundColor: "white",
        borderRadius: 10,
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
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: 0,
        width: '100%',
        height: 20,
    },
    textButtonClose: {
        backgroundColor: 'white',
        height: 20,
        width: 20,
        fontSize: 20
    },
    inputModal: {
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 30,
        marginLeft: 15,
        backgroundColor: 'paleturquoise',
        height: 45,
        width: '90%',
        borderRadius: 10,
        paddingLeft: 20
    },
    modalTitle: {
        fontSize: 25,
        color: 'teal',
        fontWeight: '500',
        marginBottom: 50
    },
    footer: {
        width: '100%',
        height:50,
        backgroundColor:'teal',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerMap: {
        height:0
    }

});