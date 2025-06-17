import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return(
   <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "Home",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="info"
      options={{
        title: "Info",
        headerShown: false,
      }}
    />
   </Stack>
  );
}
