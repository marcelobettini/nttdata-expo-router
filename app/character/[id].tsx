import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import useGet from '../(hooks)/useGet'

import { Text } from 'react-native-paper'
export default function Page() {
    const { id } = useLocalSearchParams()
    const { data, isLoading, error } = useGet('character/' + id)
    console.log(data)

    if (isLoading) return <ActivityIndicator size="large" />
    if (error) return <Text variant='displaySmall'>{error}</Text>
    return (
        <View style={{ flex: 1 }}>
            <Text>Done</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})