import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import React from 'react'
import { Slot } from 'expo-router'
import Footer from './(components)/Footer'

export default function HomeLayout() {
    const insets = useSafeAreaInsets()
    return (
        <PaperProvider>
            <SafeAreaView
                style={[styles.container, { marginTop: Platform.OS === 'android' ? insets.top : null, marginBottom: Platform.OS === 'android' ? insets.bottom : null }]}
            >

                <Text variant='headlineMedium'>header</Text>
                <Slot />
                <Footer />
            </SafeAreaView>
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