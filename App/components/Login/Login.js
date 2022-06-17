import { Text, View, TextInput } from 'react-native';
import { styles } from './Login.style';
import { useState, useContext } from "react";
import { getUser } from '../../../Api/ApiCall';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import { Token, UserData } from '../../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {token, setToken} = useContext(Token);
    const {userData, setUserData} = useContext(UserData);
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const connectUser = () => {
        const data = {
            identifier: email,
            password: password
        }
        //monica@gmail.com
        //password
        //monica
        getUser(data).then(res => handleData(res)).catch(error =>setError(error.toString()));
    }

    const handleData = (res) => {
        setToken(res.jwt)
        storeToken(res.jwt)
        setUserData(res.user)
        storeData(res.user)
        navigation.navigate('Dashboard')
    }

    const storeToken = async (value) => {
        try {
            const jsonValue = value
          await AsyncStorage.setItem('token', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }

      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@user', JSON.stringify(value))
        } catch (e) {
          console.log(e)
        }
      }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Log in</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                onChangeText={(email) => setEmail(email.trim())}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Password (min. 5 characters)"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password.trim())}
            />
            <Pressable style={styles.button} onPress={() => connectUser()}>
                <Text style={styles.textButton}>Submit</Text>
            </Pressable>
            <Text style={styles.error}>{error.substring(12)}</Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registration}>Registration</Text>
            </Pressable>
        </View>
    );
}