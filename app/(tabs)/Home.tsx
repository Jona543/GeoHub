import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function HomePage() {
    return (
        <View>
            <Text>Home Page</Text>
            <Link href="/weather/weather">Go To Weather</Link>
        </View>
    )
}