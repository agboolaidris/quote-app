import { GlobalModals } from "@/components/GlobalModals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, SplashScreen } from "expo-router";

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <GlobalModals />
    </QueryClientProvider>
  );
}
