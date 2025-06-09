import FoodItem from './FoodItem';
import { useFood } from "../contexts/FoodContext"
import { View, Text } from "react-native";


function FoodTable(props) {
	const { foods } = useFood();
	console.log("Foods en food table: ", foods)

	if(!foods) return <Text>Cargando comidas...</Text>
	return (
		<View>
			{foods.map(food => <FoodItem key={food.id} item={food} ></FoodItem>)}
		</View>
	);
}

export default FoodTable;