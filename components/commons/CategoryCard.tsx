import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";
import { AnimatePressable } from "./AnimatePressable";
import { randomStringFromArray } from "@/utils/randomStringFromArray";

type CategoryCardProps = {
  _id: string;
  name: string;
  slug: string;
  quoteCount: number;
  dateAdded: string;
  dateModified: string;
};
export const CategoryCard = ({
  name,
  quoteCount,
  dateAdded,
}: CategoryCardProps) => {
  return (
    <AnimatePressable
      style={{
        backgroundColor: COLORS.gray[100],
        padding: 15,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              fontSize: SIZES.lg,
              color: randomStringFromArray(COLORS.random),
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontSize: SIZES.sm,
              fontWeight: "500",
              color: COLORS.gray[400],
            }}
          >
            {quoteCount} {quoteCount > 1 ? "quotes" : "quote"}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.sm,
            fontWeight: "400",
            color: COLORS.gray[500],
          }}
        >
          Added {dateAdded}
        </Text>
      </View>
    </AnimatePressable>
  );
};
