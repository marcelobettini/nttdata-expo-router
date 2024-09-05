import { Pressable } from "react-native";
import { Text } from "react-native-paper";
import { useRouter } from "expo-router";
export default function Header() {
    const router = useRouter()
    function handleGoHome() {
        router.navigate("/(tabs)")
    }
    return (
        <Pressable onPress={handleGoHome}>
            <Text variant="displaySmall" style={{ color: '#110101' }}>Rick & Router</Text>
        </Pressable>
    )
}