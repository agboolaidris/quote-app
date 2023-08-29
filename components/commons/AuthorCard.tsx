import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";
import { useRouter } from "expo-router";
import { AnimatePressable } from "./AnimatePressable";
import { AuthorImageCard } from "./AuthorImageCard";
import { Author } from "@/hooks/useAuthors";

type AuthorCardProps = Author & {};

export const AuthorCard = ({
  name,
  slug,
  bio,
  quoteCount,
}: AuthorCardProps) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/(tabs)/(home)/authors/${slug}`);
  };

  return (
    <AnimatePressable onPress={onPress} style={{ padding: 15 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AuthorImageCard
            style={{
              width: 40,
              height: 40,
              resizeMode: "stretch",
              borderRadius: 80,
            }}
            slug={slug}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{
                fontWeight: "500",
                color: COLORS.gray[500],
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.sm,
                color: COLORS.rose[600],
                marginRight: 10,
              }}
            >
              {quoteCount} {quoteCount > 1 ? "quotes" : "quote"}
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          color: COLORS.gray[700],
          marginTop: 15,
          lineHeight: 22,
        }}
      >
        {bio}
      </Text>
    </AnimatePressable>
  );
};
