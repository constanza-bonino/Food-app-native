import { Text, View, StyleSheet } from "react-native";
import Order from "../components/Order.jsx"
import { useFood } from "../contexts/FoodContext.jsx";

export default function CarritoPage() {
    const { orderedFoods } = useFood();

    function calcTotal() {
        let total = 0;
        orderedFoods().map((food) => {
            total += food.price * food.quantity;
        });
        return total;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 30,
                // paddingBottom: 70,
                backgroundColor: 'pink'
            }}>
            <Text style={{
                fontSize: 50,
                fontWeight: "bold",
                backgroundColor: 'red'
            }}>Carrito</Text>
            <Order />
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: 'yellow'
                }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: "bold"
                }}>Total</Text>
                <Text Text style={{
                    fontSize: 50,
                    fontWeight: "bold"
                }}>{calcTotal()}</Text>
            </View>
        </View>
    )
}