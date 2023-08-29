import React from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import { AnimatePressable } from "./AnimatePressable";

type EmptyProps = { text?: string };

export const Empty = ({ text }: EmptyProps) => {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ alignItems: "center" }}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/lottie/state.json")}
        />
        <AnimatePressable>
          <Text>{text}</Text>
        </AnimatePressable>
      </View>
    </View>
  );
};
