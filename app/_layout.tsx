import { GlobalModals } from "@/components/GlobalModals";
import { Stack, SplashScreen } from "expo-router";

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <GlobalModals />
    </>
  );
}
