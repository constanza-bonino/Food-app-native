import FoodItem from './FoodItem';
import { useFood } from "../contexts/FoodContext"
import { View } from "react-native";


function FoodTable(props) {
	const { foods } = useFood();
	console.log("Foods en food table: ", foods)

	return (
		<View>
			{foods.map(food => <FoodItem item={food} ></FoodItem>)}
		</View>
	);
}

export default FoodTable;