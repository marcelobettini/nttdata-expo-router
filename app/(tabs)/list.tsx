import { ActivityIndicator, StyleSheet, ScrollView, FlatList } from 'react-native'
import CharacterName from '../(components)/CharacterName'
import { Text } from 'react-native-paper'
import useGet from '../(hooks)/useGet'


export default function list() {
    const { data, isLoading, error } = useGet("character")
    if (isLoading) return <ActivityIndicator size="large" />
    if (error) return <Text variant='displaySmall'>{error}</Text>
    return (
        <ScrollView>
            {data.map((ch: any) => <CharacterName character={ch} key={ch.id} />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})