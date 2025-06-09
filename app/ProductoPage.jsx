import { Button } from "react-native";
import { useFood } from "../contexts/FoodContext";

export default function ProductoPage({ id }) {
    const { agregarCarrito, sacarCarrito, getFoodById} = useFood();

    const food = getFoodById();

    return (
        <View>
            <Text>{food.name}</Text>
            <Image source={{
                uri: { url }
            }} />
            <Text>Precio: {food.price}</Text>
            <View>
                <Button onPress={() => { sacarCarrito();}}> - </Button>
                <Text>{food.quantity}</Text>
                <Button onPress={() => { agregarCarrito();}}> + </Button>
            </View>
        </View>
    )
}
