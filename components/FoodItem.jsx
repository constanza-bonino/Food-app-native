import { View, Text } from "react-native";

function FoodItem({item}) {
	return (
		<View>
			<Text>{item.name}</Text>
		</View>
	);
}

export default FoodItem;