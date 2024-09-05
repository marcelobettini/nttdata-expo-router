import { Tabs } from "expo-router"
import { Icon } from "react-native-paper"

const TabLayout = () => {
    return <Tabs
        screenOptions={() => ({
            tabBarStyle: {
                backgroundColor: 'hotpink',
                height: 60
            },
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: 16 },
            headerTintColor: 'white',
            headerTitleStyle: {
                textTransform: 'uppercase'
            },
            headerShadowVisible: false,
            headerStyle: { backgroundColor: 'hotpink' }

        })}
    >

        <Tabs.Screen name="index" options={{
            title: 'Home',
            tabBarIcon({ focused }) {
                return <Icon source={"home"} size={35} color={focused ? 'white' : ''} />
            }
        }}
        />
        <Tabs.Screen name="about" options={{
            title: 'Who We Are',
            tabBarIcon({ focused }) {
                return <Icon source={"information"} size={35} color={focused ? 'white' : ''} />
            }

        }} />
        <Tabs.Screen name="list" options={{
            title: 'Characters',
            tabBarIcon({ focused }) {
                return <Icon source={"database"} size={35} color={focused ? 'white' : ''} />
            }

        }} />
        <Tabs.Screen name="character/[id]" options={{
            title: 'Detail',
            href: null
        }} />
    </Tabs>
}

export default TabLayout

