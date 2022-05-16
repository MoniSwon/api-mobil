import { Text, View, TextInput } from 'react-native';
import { styles } from './SuccessfullRegistration.style';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Login from '../Login/Login';

export default function SuccessfullRegistration() {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setShow(true);
        }, 6000);
      }, []) 


    const showComponent = () => {
        if (!show) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Your registration was successfull !</Text>
                    <Text style={styles.text}>Redirection on the login page...</Text>
                </View>
            );
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        {showComponent}
    );
}