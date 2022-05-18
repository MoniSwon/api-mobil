import { Text, Pressable, View, TextInput, Modal } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Token, UserData } from '../../context/context';
import { FlatList, SafeAreaView } from 'react-native';
import { getPlaces, postPlaces } from '../../../Api/ApiCall';
import MapView from 'react-native-maps';
import { BodyIAteThere } from './BodyIAteThere';
import { BodyIWantToTry } from './BodyIWantToTry';
import { BodyMap } from './BodyMap';


export default function Dashboard() {
    const navigation = useNavigation();
    const { token, setToken } = useContext(Token);
    const { userData, setUserData } = useContext(UserData);
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