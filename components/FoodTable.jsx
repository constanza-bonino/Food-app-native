import FoodItem from "./FoodItem";
import { useFood } from "../contexts/FoodContext";
import { ScrollView, Text, StyleSheet } from "react-native";

function FoodTable() {
    const { foods } = useFood();

    if (!foods) return <Text>Cargando comidas...</Text>;
    return (
        <ScrollView
            contentContainerStyle={styles.listContainer}
			showsVerticalScrollIndicator={false}
            style={styles.listScroll}
        >
            {foods.map((food) => (
                <FoodItem
                    key={food.id}
                    item={food}
                />
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
});
export default FoodTable;
