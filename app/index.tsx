import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
export default function App() {
    return (
        <View >
            <Text variant='titleLarge'>Home Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
}


