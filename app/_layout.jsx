import { Stack } from 'expo-router';

import { FoodProvider } from "../contexts/FoodContext";

export default function RootLayout() {

  return (
    <FoodProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Food App' }}/>
        <Stack.Screen name="CarritoPage" 
          options={{ title: 'Carrito' }} />
        <Stack.Screen name="ProductoPage" options={{ title: 'Detalles' }} />
      </Stack>
    </FoodProvider>
  );
}
