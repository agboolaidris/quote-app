import { Pressable } from "react-native";
import React, { ReactNode } from "react";
import { PressableProps, StyleProp, ViewStyle } from "react-native";

type AnimatePressableProps = Omit<PressableProps, "style"> & {
  style?: StyleProp<ViewStyle>;
};

export const AnimatePressable = ({
  children,
  style,
  ...props
}: AnimatePressableProps) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.2 : 1 }, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};
