import { Text, View, Image } from 'react-native';
import { styles } from './Home.style';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Find your Restaurant !</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>Log in</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textButton}>Register</Text>
            </Pressable>
            <View style={styles.bottom} />
        </View>
    );
}