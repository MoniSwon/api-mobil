import { Text, View, TextInput } from 'react-native';
import { styles } from './Login.style';
import { useState } from "react";

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const newUser = () => {
        const data = {
            identifier: email,
            password: password
        }
        console.log(data)
        //createUser(data).then(res => console.log(res.status)).catch(error =>setError(error.toString()));
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
            <Pressable style={styles.button} onPress={() => newUser()}>
                <Text style={styles.textButton}>Submit</Text>
            </Pressable>
            <Text style={styles.error}>{error.substring(12)}</Text>
        </View>
    );
}