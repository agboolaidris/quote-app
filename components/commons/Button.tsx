import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { AnimatePressable } from "./AnimatePressable";
import { COLORS } from "@/constants";

type ButtonProps = {
  onPress?: () => void;
  children: ReactNode;
};

export const Button = ({ children, onPress }: ButtonProps) => {
  let content = children;

  if (typeof children === "string") {
    content = (
      <Text
        style={{
          textAlign: "center",
          color: COLORS.gray[50],
          fontWeight: "600",
        }}
      >
        {children}
      </Text>
    );
  }

  return (
    <AnimatePressable
      style={{
        backgroundColor: COLORS.gray[500],
        padding: 20,
        borderRadius: 10,
      }}
      onPress={onPress}
    >
      {content}
    </AnimatePressable>
  );
};
