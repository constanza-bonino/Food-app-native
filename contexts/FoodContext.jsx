import { createContext, useContext, useState, useEffect } from "react";
import env from "../env.json";
const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
	const [foods, setFoods] = useState(undefined);

    const onFoodClicked = (food_id) => {
		let clonedFoods = [...foods];
		clonedFoods.forEach((food) => {
			if (food.id === food_id && food.stock > 0) {
				food.stock = food.stock - 1;
				food.quantity = food.quantity + 1;
			}
		});
		setFoods(clonedFoods);
	}

	const getFoodById = (id) => {
		
		return (foods.find((food) => food.id === id));
	}

	const orderedFoods = () => {
		const array = foods.filter((food) => food.quantity > 0);
		return (array);
	}

	const agregarCarrito = (id) => {
		let nuevasComidas = foods;
		const indiceElem = nuevasComidas.findIndex((food) => food.id === id);
		nuevasComidas[indiceElem].quantity++;
		nuevasComidas[indiceElem].stock--;
		setFoods(nuevasComidas);
	}

	const sacarCarrito = (id) => {
		let nuevasComidas = foods;
		const indiceElem = nuevasComidas.findIndex((food) => food.id === id);
		nuevasComidas[indiceElem].quantity--;
		nuevasComidas[indiceElem].stock++;
		setFoods(nuevasComidas);
	}

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                console.log(env.API_ENDPOINT);
                const url = env.API_ENDPOINT;
                const response = await fetch(url, {
                    headers: {
                        "ngrok-skip-browser-warning": "true",
                        "User-Agent": "ReactNativeApp/1.0",
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setFoods(data);
            } catch (error) {
                console.log("error", error);
            }
        };

		fetchFoods();

	}, []);


  return (
    <FoodContext.Provider value={{ foods, orderedFoods, agregarCarrito, sacarCarrito, getFoodById, onFoodClicked }}>
      	{children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
