import { Text, Pressable, View, TextInput } from 'react-native';
import { styles } from './Dashboard.style';
import MapView, { Marker } from 'react-native-maps';

export function BodyMap() {
    return (
        <View style={styles.containerMap}>
            <View style={styles.search}>
                <TextInput style={styles.textInput}></TextInput>
                <Pressable style={styles.searchIcon}><Text style={styles.textIcon}>🔎</Text></Pressable>
            </View>
            <MapView
    style={styles.map}
    region={{
    latitude: 45.616570, //My home :)
    longitude: 5.210190,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }}
    >
        <Marker coordinate = {{latitude: 37.78825,longitude: -122.4324}}
         pinColor = {"purple"} // any color
         title={"title"}
         description={"description"}/>
    </MapView>
        </View>
    );
}