import { Link } from "expo-router"
import { Text, View } from "react-native"

const HomePage = () => {
    return (
        <View>
            <Text>Home Page</Text>
            <Link href="/weather/weather">Go To Weather</Link>
        </View>
    )
}