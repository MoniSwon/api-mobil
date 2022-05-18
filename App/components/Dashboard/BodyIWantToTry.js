import { Text, Pressable, View, TextInput, Modal } from 'react-native';
import { styles } from './Dashboard.style';
import { useState, useContext, useEffect } from "react";
import { Token, UserData } from '../../context/context';
import { FlatList, SafeAreaView } from 'react-native';
import { getPlaces, postPlaces, putPlaces, deletePlace } from '../../../Api/ApiCall';

export function BodyIWantToTry() {
    const { token, setToken } = useContext(Token);
    const [placesNotGone, setPlacesNotGone] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [comment, setComment] = useState("");
    const [dataToEdit, setDataToEdit] = useState("");
    const [idToEdit, setIdToEdit] = useState("");

    useEffect(() => {
        getPlaces(token).then(res => {
            const result = res.data
            const notGone = result.filter((key) => !key.attributes.gone)
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

    const editData = (item) => {
        setEditModalVisible(true)
        setDataToEdit(item.attributes)
        setTitle(item.attributes.title)
        setComment(item.attributes.comment)
        setAddress(item.attributes.address)
        setLongitude(item.attributes.longitude)
        setLatitude(item.attributes.latitude)
        setIdToEdit(item.id)
    }

    const editPlace = () => {
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
        putPlaces(token, data, idToEdit)
        setEditModalVisible(!editModalVisible)
    }

    const deleteThePlace = () => {
        deletePlace(token, idToEdit)
        setEditModalVisible(!editModalVisible)
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
                            <View style={styles.list}>
                                <View>
                                    <Pressable style={{
                                        height: 75,
                                        flexDirection: 'column',
                                        marginLeft: 15,
                                    }}
                                        onPress={() => editData(item)}
                                    >
                                        <Text style={styles.textTitle}>🍽 {item.attributes.title.toUpperCase()}</Text>
                                        <Text style={styles.textAddress}>🛩 {item.attributes.address}</Text>
                                    </Pressable>
                                </View>
                                <View style={styles.editIcon}>
                                    <Pressable style={{
                                        height: 75,
                                        flexDirection: 'column',
                                        marginLeft: 15,
                                    }}
                                        onPress={() => editData(item)}
                                    >
                                        <Text style={styles.textIcon}>✏</Text>
                                    </Pressable>
                                </View>
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
                                    <Pressable style={styles.modalButton} onPress={() => sendPlace()}>
                                        <Text style={styles.textButton}>Add</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editModalVisible}
                    onRequestClose={() => {
                        setEditModalVisible(!editModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.buttonClose}>
                                <Pressable
                                    onPress={() => setEditModalVisible(!editModalVisible)}>
                                    <Text style={styles.textButtonClose}>✖</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Text style={styles.modalTitle}>Edit a restaurant</Text>
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder={dataToEdit.title}
                                    onChangeText={(title) => setTitle(title)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder={dataToEdit.address}
                                    onChangeText={(address) => setAddress(address)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder={dataToEdit.comment}
                                    onChangeText={(comment) => setComment(comment)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder={"" + dataToEdit.latitude}
                                    onChangeText={(latitude) => setLatitude(latitude)}
                                />
                                <TextInput
                                    style={styles.inputModal}
                                    placeholder={"" + dataToEdit.longitude}
                                    onChangeText={(longitude) => setLongitude(longitude)}
                                />
                                <View style={styles.containerButton}>
                                    <Pressable style={styles.modalButton} onPress={() => editPlace()}>
                                        <Text style={styles.textButton}>Edit</Text>
                                    </Pressable>
                                    <Pressable style={styles.modalButton} onPress={() => deleteThePlace()}>
                                        <Text style={styles.textButton}>Delete</Text>
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