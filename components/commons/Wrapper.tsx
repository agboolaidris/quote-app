import { COLORS } from "@/constants";
import { useNavigation } from "expo-router";
import AnimatedLottieView from "lottie-react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

type MainWrapperProps = {
  children: ReactNode;
  isLoading?: boolean;
};

export const MainWrapper = ({ children, isLoading }: MainWrapperProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray[50],
      }}
    >
      {isLoading ? (
        <Animated.View
          style={{
            paddingHorizontal: 10,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          entering={FadeIn.duration(1000)}
        >
          <AnimatedLottieView
            autoPlay
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../../assets/lottie/loading.json")}
          />
        </Animated.View>
      ) : (
        <Animated.View
          style={{ paddingHorizontal: 10 }}
          entering={FadeIn.duration(1000)}
        >
          {children}
        </Animated.View>
      )}
    </SafeAreaView>
  );
};
