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

export function BodyMap() {
    return (
        <View style={styles.containerMap}>
            <View style={styles.search}>
                <TextInput style={styles.textInput}></TextInput>
                <Pressable style={styles.searchIcon}><Text style={styles.textIcon}>🔎</Text></Pressable>
            </View>
            <MapView style={styles.map} />
        </View>
    );
}