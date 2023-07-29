import { COLORS } from "@/constants";
import React, { ReactNode } from "react";
import { SafeAreaView, Platform, StatusBar, View } from "react-native";

type MainWrapperProps = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.gray[100],
      }}
    >
      <View style={{ paddingHorizontal: 10 }}>{children}</View>
    </SafeAreaView>
  );
};
