import { useLocalSearchParams } from 'expo-router';
import {
    Button, View, Text, Image, StyleSheet,
    Platform,
    useWindowDimensions,
} from "react-native";
import { useFood } from "../contexts/FoodContext";
import { useEffect } from 'react';

export default function ProductoPage() {
    const { foods, agregarCarrito, sacarCarrito, getFoodById, onFoodClicked } = useFood();
    const { id } = useLocalSearchParams();
    let food = getFoodById(id);


    return (
        <View>
            <Text>{food.name}</Text>
            <Image
                source={{ uri: food.thumbnail_url }}
                style={[
                    styles.image,
                    Platform.OS === "web"
                        ? styles.imageWeb
                        : styles.imageMobile,
                ]}
            />
            <Text>Precio: {food.price}</Text>
            <View>
                <Button onPress={() => { sacarCarrito(id); }} disabled={food.quantity === 0}> - </Button>
                <Text>{food.quantity}</Text>
                <Button onPress={() => { onFoodClicked(id); }} disabled={food.stock === 0}> + </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
    },
    imageWeb: {
        height: 300,
        width: 400,
        margin: 4,
        borderRadius: 6,
    },
    imageMobile: {
        width: 120,
        height: 120,
        marginRight: 12,
    },
});
