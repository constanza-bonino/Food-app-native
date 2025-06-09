import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./app/HomePage";
import { FoodProvider } from "./contexts/FoodContext";

export default function App() {
    return (
        <FoodProvider>
            <View style={styles.container}>
                <HomePage></HomePage>
                <StatusBar style="auto" />
            </View>
        </FoodProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
