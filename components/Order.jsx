import { View, StyleSheet } from "react-native";
import OrderItem from "./OrderItem.jsx"
import { useFood } from "../contexts/FoodContext.jsx";

export default function Order() {
    const { orderedFoods } = useFood();

    const comidaPedido = orderedFoods();
    console.log("comida", comidaPedido);

    return (
        <View style={{
                flex: 1,
                alignSelf: "flex-start",

            }}>
            {comidaPedido.map((food) => (<OrderItem key={food.id} nombre={food.name} cantidad={food.quantity} precio={food.price} />)
            )}
        </View>
    )
}