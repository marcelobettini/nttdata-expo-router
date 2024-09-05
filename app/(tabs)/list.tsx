import { ActivityIndicator, StyleSheet, FlatList, RefreshControl } from 'react-native'
import CharacterName from '../(components)/CharacterName'
import { Text } from 'react-native-paper'
import useGet from '../(hooks)/useGet'
import { Character } from '../(types)/types'
import { useState } from 'react'


export default function list() {
    const [isRefreshing, setIsRefresing] = useState<boolean>(false)
    const { data, isLoading, error } = useGet("character")

    function onRefresh() {
        setIsRefresing(true)
        setTimeout(() => setIsRefresing(false), 2000)
    }
    if (isLoading) return <ActivityIndicator size="large" />
    if (error) return <Text variant='displaySmall'>{error}</Text>
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
            data={data as Character[]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CharacterName character={item} />}
        />

    )
}

const styles = StyleSheet.create({})