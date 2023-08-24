import React from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import { AnimatePressable } from "./AnimatePressable";

export const Empty = () => {
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
          <Text> You've got nothing in your bookmark...yet</Text>
        </AnimatePressable>
      </View>
    </View>
  );
};
