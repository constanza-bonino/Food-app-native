import FoodTable from "../components/FoodTable";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <FoodTable />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Link href="/CarritoPage" style={{textAlign: "center"}}>
                        <Text style={styles.buttonText}>Ver Carrito 🛒</Text>
                    </Link>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "90%",
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginVertical: 3,
        textAlign: "center",
    },
    footer: {
        width: "100%",
        paddingVertical: 6,
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ddd",
    },
    button: {
        backgroundColor: "#fe7843",
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 8,
        width: "100%",
        maxWidth: 800,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#fe78438f",
    },
    buttonText: {
        color: "#fe7843aa",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
});
export default HomePage;
