import { Text, View } from 'react-native';
import { styles } from './Dashboard.style';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Hey</Text>
        </View>
    );
}