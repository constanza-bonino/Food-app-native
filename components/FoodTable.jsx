import FoodItem from "./FoodItem";
import { useFood } from "../contexts/FoodContext";
import { ScrollView, Text, StyleSheet, View,ActivityIndicator} from "react-native";

function FoodTable() {
    const { foods, fetchError } = useFood();

    if (fetchError || !foods)
        return (
            <View style={styles.errorContainer}>
                {!foods && <ActivityIndicator size="large"  color="#fe78438f"/>}
                {fetchError && <Text style={styles.errorText}>Error obteniendo comidas</Text>}
            </View>
        );
    if (!foods) return <Text>Cargando comidas...</Text>;

    return (
        <ScrollView
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            style={styles.listScroll}
        >
            {foods.map((food) => (
                <FoodItem key={food.id} item={food} />
            ))}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    listScroll: {
        flex: 1,
        width: "100%",
    },
    listContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingBottom: 16,
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#eee", 
    },
    errorText: {
        fontSize: 20,
        color: "#fe78438f", 
        fontWeight: "bold",
    },
});
export default FoodTable;
