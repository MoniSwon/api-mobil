import { Text, Pressable, View } from 'react-native';
import { styles } from './Dashboard.style';
import { useState } from "react";
import { BodyIAteThere } from './BodyIAteThere';
import { BodyIWantToTry } from './BodyIWantToTry';
import { BodyMap } from './BodyMap';


export default function Dashboard() {
    const [isPress, setIsPress] = useState(true);
    const [isPressSecond, setIsPressSecond] = useState(false);
    const [isPressRestaurant, setIsPressRestaurant] = useState(true);
    const [isPressMap, setIsPressMap] = useState(false);

    return (
        <View>
            <View style={isPressRestaurant ? styles.header : styles.headerMap}>
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
            {isPressRestaurant ? (isPress ? <BodyIAteThere /> : <BodyIWantToTry />) : <BodyMap />}
            <View style={styles.footer}>
                <Pressable
                    style={styles.btnPress}
                    onPress={() => {
                        setIsPressRestaurant(true)
                        setIsPressMap(false)
                    }}>
                    <Text style={styles.text}>🎯</Text>
                </Pressable>
                <Pressable
                    style={styles.darkerButton}
                    onPress={() => {
                        setIsPressMap(true)
                        setIsPressRestaurant(false)
                    }}>
                    <Text style={styles.text}>🌍</Text>
                </Pressable>
            </View>

        </View>
    );
}