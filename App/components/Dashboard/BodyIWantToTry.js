import { Text, Pressable, View, TextInput, Modal } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Token, UserData } from '../../context/context';
import { FlatList, SafeAreaView } from 'react-native';
import { getPlaces, postPlaces } from '../../../Api/ApiCall';
import MapView from 'react-native-maps';

export function BodyIWantToTry() {
    const { token, setToken } = useContext(Token);
    const [placesNotGone, setPlacesNotGone] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        getPlaces(token).then(res => {
            const result = res.data
            const gone = result.filter((key) => key.attributes.gone)
            const notGone = result.filter((key) => !key.attributes.gone)
            console.log(gone)
            setPlacesNotGone(notGone)
        })
    }, []);

    const sendPlace = () => {
        const data = {
            data: {
                title: title,
                address: address,
                comment: comment,
                latitude: latitude,
                longitude: longitude,
                gone: false,
                type: 1
            }
        }
        postPlaces(token, data)
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput style={styles.textInput}></TextInput>
                <Pressable style={styles.searchIcon}><Text style={styles.textIcon}>🔎</Text></Pressable>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textButton}>+</Text>
            </Pressable>

            <View>
                <SafeAreaView>
                    <FlatList
                        data={placesNotGone}
                        contentContainerStyle={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <View>
                                <Pressable style={{
                                    width: '85%',
                                    height: 75,
                                    flexDirection: 'column',
                                    borderBottomColor: 'teal',
                                    borderBottomWidth: 2,
                                    marginLeft: 15,
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
                            <View style={styles.buttonClose}>
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textButtonClose}>✖</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Text style={styles.modalTitle}>Add a restaurant</Text>
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder="Name of the Restaurant"
                                    onChangeText={(title) => setTitle(title)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder="Address"
                                    onChangeText={(address) => setAddress(address)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder="Put a comment"
                                    onChangeText={(comment) => setComment(comment)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder="Latitude of the place"
                                    onChangeText={(latitude) => setLatitude(latitude)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder="Longitude of the place"
                                    onChangeText={(longitude) => setLongitude(longitude)}
                                />
                                <View style={styles.containerButton}>
                                    <Pressable style={styles.button} onPress={() => sendPlace()}>
                                        <Text style={styles.textButton}>+</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    );
}