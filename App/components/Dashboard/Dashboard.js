import { Text, Pressable, View } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
    const navigation = useNavigation();
    const [isPress, setIsPress] = useState(true);
    const [isPressSecond, setIsPressSecond] = useState(false);


    return (
        <View style={styles.header}>
            <Pressable
                style={isPress ? styles.btnPress : styles.btnNormal}
                onPress={() => { 
                    setIsPress(true)
                    setIsPressSecond(false)
                 }}>
                <Text style={styles.text}>I ATE THERE</Text>
            </Pressable>
            <Pressable
                style={isPressSecond ? styles.btnPress : styles.btnNormal}
                onPress={() => { 
                    setIsPressSecond(true)
                    setIsPress(false)
                     }}>
                <Text style={styles.text}>I WANT TO TRY</Text>
            </Pressable>

        </View>
    );
}