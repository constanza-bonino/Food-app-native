import FoodTable from "../components/FoodTable";
import { Text, View } from "react-native";

function HomePage(props) {
    return (
        <View>
            <Text>Home Page</Text>
            <FoodTable></FoodTable>
        </View>
    );
}

export default HomePage;
