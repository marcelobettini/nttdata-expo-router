import { StyleSheet } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Stack } from 'expo-router'
import Header from './(components)/Header'



export default function HomeLayout() {
    const insets = useSafeAreaInsets()
    return (
        <PaperProvider>
            <Stack>
                <Stack.Screen name='(tabs)' options={{
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: 'hotpink'
                    },
                    headerRight: () => <Header />,
                    headerShadowVisible: false,
                }} />

            </Stack>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    }

})
{/* <SafeAreaView
    style={[styles.container, { marginTop: Platform.OS === 'android' ? insets.top : null, marginBottom: Platform.OS === 'android' ? insets.bottom : null }]}
>

</SafeAreaView> */}