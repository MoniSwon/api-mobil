import { Text, Pressable, View, TextInput } from 'react-native';
import { styles } from './Dashboard.style';
import MapView, { Marker } from 'react-native-maps';
import { Token, UserData } from '../../context/context';
import { useEffect, useState, useContext } from "react";
import { getPlaces } from '../../../Api/ApiCall';


export function BodyMap() {
    const [places, setPlaces] = useState("");
    const [placesNotGone, setPlacesNotGone] = useState("");
    const { token, setToken } = useContext(Token);

    useEffect(() => {
        getPlaces(token).then(res => {
            const result = res.data
            const gone = result.filter((key) => key.attributes.gone)
            setPlaces(gone)
            const notGone = result.filter((key) => !key.attributes.gone)
            setPlacesNotGone(notGone)
        })
    }, []);

    return ( // we need to add a legend
        <View style={styles.containerMap}>
            <View style={styles.search}>
                <TextInput style={styles.textInput}></TextInput>
                <Pressable style={styles.searchIcon}><Text style={styles.textIcon}>🔎</Text></Pressable>
            </View>
            <MapView
                style={styles.map}
                region={{ // To change to the position I'm actually
                    latitude: 45.616570,
                    longitude: 5.210190,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {places ? places.map(x => {return (<Marker coordinate={{ latitude: x.attributes.latitude, longitude: x.attributes.longitude }}
                    pinColor={"teal"}
                    key={x.id}
                    title={x.attributes.title}
                    description={x.attributes.comment} />)}
                    ) : null }
                    {placesNotGone ? placesNotGone.map(x => {return (<Marker coordinate={{ latitude: x.attributes.latitude, longitude: x.attributes.longitude }}
                    pinColor={"gray"} 
                    key={x.id}
                    title={x.attributes.title}
                    description={x.attributes.comment} />)}
                    ) : null }
                <Marker coordinate={{ latitude: 45.615285, longitude: 5.210490 }} // I live exactly here
                    pinColor={"purple"}
                    title={"My home"}
                    description={"The best place ever, better than a restaurant"} />
            </MapView>
        </View>
    );
}