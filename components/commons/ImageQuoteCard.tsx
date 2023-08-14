import { View, Text, Dimensions } from "react-native";
import React from "react";

type ImageQuoteCardProps = {
  backgroundColor: string;
  content: string;
  author: string;
};
export const ImageQuoteCard = ({ backgroundColor }: ImageQuoteCardProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor,
          minHeight: Dimensions.get("screen").width + 50,
          width: Dimensions.get("screen").width - 50,
        }}
      >
        <Text>ImageQuoteCard</Text>
      </View>
    </View>
  );
};
