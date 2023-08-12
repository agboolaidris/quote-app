import { COLORS } from "@/constants";
import React, { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";

type MainWrapperProps = {
  children: ReactNode;
};

export const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray[50],
      }}
    >
      <View style={{ paddingHorizontal: 10 }}>{children}</View>
    </SafeAreaView>
  );
};
