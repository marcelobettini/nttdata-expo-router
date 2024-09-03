import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
type Status = 'unknown' | 'Dead' | 'Alive'

export default function CharacterStatus({ status }: { status: string }) {


    return (

        <View style={styles['container']}>
            <Text variant='titleLarge'>status:</Text>
            <Text variant='titleLarge'
                style={(styles[status as Status])}
            > {status}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    unknown: { color: 'blue' },
    Dead: { color: 'gray', textDecorationLine: 'line-through' },
    Alive: { color: 'green' }

})