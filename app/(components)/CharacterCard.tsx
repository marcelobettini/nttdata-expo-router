import { StyleSheet, Image, ScrollView } from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Text, Card, Button, MD2Colors } from "react-native-paper";
import React from "react";
import { Character } from "../(types)/types";
import { Link } from "expo-router";
import CharacterStatus from "./CharacterStatus";

export default function CharacterCard({ character }: { character: Character }) {
    const frame = useSafeAreaFrame();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={{ width: frame.width - 20 }}>
                <Card.Title
                    titleVariant="titleLarge"
                    title={character.name}
                    subtitleVariant="headlineSmall"
                    subtitle={<CharacterStatus status={character.status} />}
                />
                <Card.Content>
                    <Image style={styles.image} source={{ uri: character.image }} />
                    <Text variant="bodyLarge">Name: {character.name}</Text>
                    <Text variant="bodyLarge">Gender: {character.gender}</Text>
                    <Text variant="bodyLarge">Species: {character.species}</Text>
                    <Text variant="bodyLarge">Origin: {character.origin.name}</Text>
                    <Text variant="bodyLarge">Location: {character.location.name}</Text>
                    <Text variant="bodyLarge">Type: {character.type || "N/A"} </Text>
                    <Card.Actions>
                        <Link href={"/list"} asChild>
                            <Button mode="contained" buttonColor={MD2Colors.pink300}>
                                GO BACK
                            </Button>
                        </Link>
                    </Card.Actions>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
        height: 350,
        width: "100%",
        resizeMode: "cover",
    },
});
