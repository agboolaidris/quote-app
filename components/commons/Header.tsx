import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View
      style={{ height: 50, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        style={{
          fontSize: SIZES.lg,
          color: COLORS.gray[600],
          fontWeight: "bold",
        }}
      >
        {title || "Quote"}.
      </Text>
    </View>
  );
};
