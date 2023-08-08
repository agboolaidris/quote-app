import { COLORS, FONT, SIZES } from "@/constants";
import { Stack } from "expo-router";
import { Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { ArrowBackIcon } from "@/components/icons/ArrowBack";
import { AnimatePressable } from "@/components/commons/AnimatePressable";

const Header = ({ navigation, options }: NativeStackHeaderProps) => {
  const isBack = navigation.canGoBack();
  const goBack = () => {
    if (isBack) {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray[700],
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <StatusBar backgroundColor={COLORS.gray[700]} barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        {isBack && (
          <AnimatePressable
            onPress={goBack}
            style={{
              position: "absolute",
              zIndex: 10,
              left: 5,
            }}
          >
            <ArrowBackIcon width={30} height={30} color={COLORS.gray[50]} />
          </AnimatePressable>
        )}
        <View style={{ flex: 1, paddingVertical: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.xxl,
              color: COLORS.gray[50],
              fontWeight: "bold",
            }}
          >
            {options.headerTitle?.toString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Authors." }} />
      <Stack.Screen name="[slug]" options={{ headerTitle: "Author." }} />
    </Stack>
  );
}
