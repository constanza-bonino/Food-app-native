import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

export default function OrderItem({nombre, cantidad, precio}) {

    return (
        <View style={{
            flex:1,
            flexDirection: "row",

        }}>
            <Button> X </Button>
            <Text>{nombre} x {cantidad}</Text>
            <Text>{precio*cantidad}</Text>
        </View>
    )
}