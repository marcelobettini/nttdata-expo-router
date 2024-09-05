import { ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import useGet from '../../(hooks)/useGet'

import { Text } from 'react-native-paper'
import CharacterCard from '../../(components)/CharacterCard'
export default function Page() {
    const { id } = useLocalSearchParams()
    const { data, isLoading, error } = useGet(`character/${id}`)

    if (isLoading) return <ActivityIndicator size="large" />
    if (error) return <Text variant='displaySmall'>{error}</Text>
    return (
        <>
            <Stack.Screen options={{
                headerTitleAlign: 'center'
            }} />
            <CharacterCard character={data} />
        </>
    )
}

const styles = StyleSheet.create({})