import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    TouchableOpacity,
} from "react-native";
import { useFood } from "../contexts/FoodContext";
import { Link } from "expo-router";

function FoodItem({ item }) {
    const { onFoodClicked } = useFood();

    const disabled = item.stock <= 0;
    return (
        <TouchableOpacity
            style={[
                styles.card,
                Platform.OS === "web" ? styles.cardWeb : styles.cardMobile,
                disabled && styles.disabledCard,
            ]}
            disabled={disabled}
            activeOpacity={disabled ? 1 : 0.7}
            onPress={() => onFoodClicked(item.id)}
        >
            <Image
                source={{ uri: item.thumbnail_url }}
                style={[
                    styles.image,
                    Platform.OS === "web"
                        ? styles.imageWeb
                        : styles.imageMobile,
                ]}
            />

            <View style={styles.info}>
                <Link href={`/ProductoPage?id=${item.id}`} >
                    <Text style={styles.buttonText}>Ver más...</Text>
                </Link>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityBadge}>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: "#fe78438f",
        borderRadius: 12,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    disabledCard: {
        opacity: 0.5,
    },
    image: {
        resizeMode: "cover",
    },
    info: {
        margin: 4,
        flex: 1,
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
    },
    price: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
    },
    quantityBadge: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#eee",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },

    quantityText: {
        fontSize: 21,
    },

    cardWeb: {
        flexDirection: "column",
        width: "30%",
        marginHorizontal: "2%",
        marginVertical: "1%",
        minWidth: 250,
        maxWidth: 320,
    },
    imageWeb: {
        height: 140,
        margin: 4,
        borderRadius: 6,
    },

    cardMobile: {
        flexDirection: "row",
        width: "100%",
        alignSelf: "center",
        marginVertical: 8,
    },
    imageMobile: {
        width: 120,
        height: 120,
        marginRight: 12,
    },
});

export default FoodItem;
