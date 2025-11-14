import { Stack } from "expo-router";

export default function RootLayout() {
  return (                                   // CHANGED: added return
    <Stack
      screenOptions={{
        headerShown: false,                  // hide header for all screens
      }}
    >
      <Stack.Screen name="index" />          {/* optional but nice to be explicit */}
    </Stack>
  );
}
