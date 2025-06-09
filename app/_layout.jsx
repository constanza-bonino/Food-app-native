import { Stack } from 'expo-router';

import { FoodProvider } from "../contexts/FoodContext";
import HomePage from '.';

export const unstable_settings = {
  initialRouteName: 'HomePage',
};

export default function RootLayout() {

  return (
    <FoodProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'HomePage' }}/>
        <Stack.Screen name="CarritoPage"
          options={{ headerShown: false }} />
        <Stack.Screen name="ProductoPage" />
      </Stack>
    </FoodProvider>
  );
}
