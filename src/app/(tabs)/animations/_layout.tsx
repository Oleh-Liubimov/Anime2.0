import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="firstAnimation"
        options={{
          headerTitle: "Grow and shrink animation",
        }}
      />
      <Stack.Screen
        name="animatedTabs"
        options={{
          headerTitle: "Animated Tabs",
        }}
      />
      <Stack.Screen
        name="confetti"
        options={{
          headerTitle: "Confetti",
        }}
      />
      <Stack.Screen
        name="carousel"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="headerAnimation" options={{ headerShown: false }} />
      <Stack.Screen name="deleteAnimation" />
    </Stack>
  );
}
