import { StyleSheet } from "react-native";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'paleturquoise', 
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    button: {
       // elevation:1,
        width:200,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 30,
        backgroundColor: 'mediumturquoise',
        marginTop:4
    },
    textButton: {
        fontSize:18,
        fontWeight:'bold',
        color:'white'
      },
    text: {
        fontSize:22,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'white',
        marginTop:200,
        marginBottom:20
    }
});