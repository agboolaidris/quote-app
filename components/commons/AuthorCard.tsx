import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "@/constants";
import { useRouter } from "expo-router";
import { AnimatePressable } from "./AnimatePressable";
import { BookMarkIcon } from "../icons/BookMark";
import { randomStringFromArray } from "@/utils/randomStringFromArray";

type AuthorCardProps = {
  _id: string;
  name: string;
  bio: string;
  description: string;
  link: string;
  quoteCount: number;
  slug: string;
  dateAdded: string;
  dateModified: string;
};

export const AuthorCard = ({
  name,
  slug,
  bio,
  quoteCount,
}: AuthorCardProps) => {
  const [source, setSource] = useState<ImageSourcePropType>({
    uri: `https://images.quotable.dev/profile/200/${slug}.jpg`,
  });

  const handleImageError = () => {
    // Update the image source to fallback URI when the original image fails to load
    setSource(require("@/assets/images/avatar.jpg"));
  };
  const router = useRouter();

  const onPress = () => {
    router.push(`/(tabs)/authors/${slug}`);
  };

  return (
    <AnimatePressable onPress={onPress} style={{ padding: 15 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={source}
            style={{
              width: 40,
              height: 40,
              resizeMode: "stretch",
              borderRadius: 80,
            }}
            onError={handleImageError}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text
              style={{
                //fontSize: SIZES.sm,
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
        <AnimatePressable
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <BookMarkIcon
            width={16}
            height={16}
            stroke={true ? COLORS.rose[600] : COLORS.gray[500]}
            fill={true ? COLORS.rose[600] : "none"}
          />
        </AnimatePressable>
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
