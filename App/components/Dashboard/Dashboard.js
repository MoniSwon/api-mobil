import { Text, Pressable, View, TextInput, Modal } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { Token, UserData } from '../../context/context';
import { FlatList, SafeAreaView } from 'react-native';
import { getPlaces, postPlaces } from '../../../Api/ApiCall';
import MapView from 'react-native-maps';


export function BodyIAteThere() {
    const [places, setPlaces] = useState("");
    const { token, setToken } = useContext(Token);
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
            setPlaces(gone)
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
                gone: true,
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
                        data={places}
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