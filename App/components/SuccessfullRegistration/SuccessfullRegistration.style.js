import reactDom from "react-dom";
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
    text: {
        fontSize:30,
        fontWeight:'bold',
        color:'mediumturquoise',
        padding:20,
    }
});