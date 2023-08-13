import { Header } from "@/components/commons/Header";
import { COLORS, SIZES } from "@/constants";
import { Stack } from "expo-router";

export default function SaveLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: SIZES.lg,
          color: COLORS.gray[600],
          fontWeight: "600",
        },
        headerTitle: "Quotes.",
        headerStyle: { backgroundColor: COLORS.gray[50] },
        header: Header,
        // headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Authors." }} />
      <Stack.Screen name="[slug]" options={{ headerTitle: "Author." }} />
    </Stack>
  );
}
