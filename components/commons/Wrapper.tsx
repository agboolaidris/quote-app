import { COLORS } from "@/constants";
import { useNavigation } from "expo-router";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

type MainWrapperProps = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray[50],
      }}
    >
      <Animated.View
        style={{ paddingHorizontal: 10 }}
        entering={FadeIn.duration(1000)}
      >
        {children}
      </Animated.View>
    </SafeAreaView>
  );
};
