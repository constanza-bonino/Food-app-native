import { createContext, useContext, useState, useEffect } from "react";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		console.log("LLamando a use effect context")
		
		const fetchFoods = async () => {
			try {
				const url = "http://localhost:3000/foods";
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setFoods(data);

				console.log("Resposnse: ", data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFoods();
	}, []);


  return (
    <FoodContext.Provider value={{ foods }}>
      	{children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);