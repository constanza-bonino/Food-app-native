import { createContext, useContext, useState, useEffect } from "react";
import env from "../env.json";
const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);

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
        <FoodContext.Provider value={{ foods }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => useContext(FoodContext);
