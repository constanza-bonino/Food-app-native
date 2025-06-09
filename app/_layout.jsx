import { Stack } from 'expo-router';

import { FoodProvider } from "../contexts/FoodContext";

export default function RootLayout() {

  return (
    <FoodProvider>
      <Stack>
        <Stack.Screen name="HomePage" />
        <Stack.Screen name="CarritoPage"
          options={{ headerShown: false }} />
        <Stack.Screen name="ProductoPage" />
      </Stack>
    </FoodProvider>
  );
}
