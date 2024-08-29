import { StyleSheet, TouchableHighlight, View, Image } from 'react-native'
import { Link } from 'expo-router'
import { Text, MD2Colors } from 'react-native-paper'
import React from 'react'
import { Character } from '../(types)/types'

const CharacterName = ({ character }: { character: Character }) => {
    return (
        <Link href={`/character/${character.id}`} asChild>
            <TouchableHighlight underlayColor={MD2Colors.blue100}>

                <View style={styles.container}>
                    <Image style={styles.thumbNail} source={{ uri: character.image }} />
                    <Text variant='titleLarge'>{character.name}</Text>
                </View>
            </TouchableHighlight>
        </Link>
    )
}

export default CharacterName


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: MD2Colors.deepPurple300,
        marginBottom: 12,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    thumbNail: {
        width: 50,
        height: 50,
        borderRadius: 50
    }

})