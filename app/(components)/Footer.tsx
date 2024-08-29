import { StyleSheet, View } from 'react-native'
import { Link } from 'expo-router'
import { Button, MD3Colors } from 'react-native-paper'
import React from 'react'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Link href="/" asChild>
                <Button mode='outlined' buttonColor={MD3Colors.primary50} textColor='white'>About</Button>
            </Link>
            <Link href="/about" asChild>
                <Button mode='outlined' buttonColor={MD3Colors.primary50} textColor='white'>Home</Button>
            </Link>
            <Link href="/list" asChild>
                <Button mode='outlined' buttonColor={MD3Colors.primary50} textColor='white'>API</Button>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        columnGap: 9,
        marginVertical: 5

    }
})