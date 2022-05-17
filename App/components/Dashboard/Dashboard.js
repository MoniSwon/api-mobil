import { Text, Pressable, View, TextInput, Modal } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Token, UserData } from '../../context/context';
import { FlatList, SafeAreaView } from 'react-native';
import { getPlaces } from '../../../Api/ApiCall';


export function BodyIAteThere() {
    const [places, setPlaces] = useState("");
    const { token, setToken } = useContext(Token);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log(token);
        getPlaces(token).then(res => {
          setPlaces(res.data)
          console.log(res.data)
        })
      }, []);
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput style={styles.textInput}></TextInput>
                <Pressable style={styles.searchIcon}><Text style={styles.textIcon}>🔎</Text></Pressable>
            </View>
            <View>
            <SafeAreaView>
                    <FlatList
                        data={places}
                        contentContainerStyle={{
                            display:'flex',
                            flexDirection:'column',
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                                <View>
                                <Pressable style={{
                                    width: '85%',
                                    height: 75,
                                    flexDirection: 'column',
                                    borderBottomColor:'teal',
                                    borderBottomWidth: 2,
                                    marginLeft:15,
                                }}
                                >
                                    <Text style={styles.textTitle}>🍽 {item.attributes.title.toUpperCase()}</Text>
                                    <Text style={styles.textAddress}>🛩 {item.attributes.address}</Text>
                                </Pressable>
                                </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View>
                <Pressable 
                style={styles.button}
                onPress={() => setModalVisible(true)}>
                    <Text style={styles.textButton}>+</Text>
                    </Pressable>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>X</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    );
}


export default function Dashboard() {
    const navigation = useNavigation();
    const { token, setToken } = useContext(Token);
    const { userData, setUserData } = useContext(UserData);
    const [isPress, setIsPress] = useState(true);
    const [isPressSecond, setIsPressSecond] = useState(false);



    return (
        <View>
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
            <BodyIAteThere />
        </View>
    );
}