import React from 'react';
import FoodItem from './FoodItem';
import { useFood } from "../contexts/FoodContext"

function FoodTable(props) {
	const { foods } = useFood();
	console.log("Foods en food table: ", foods)

	return (
		<div>
			{foods.map(food => <FoodItem item={food} ></FoodItem>)}
		</div>
	);
}

export default FoodTable;