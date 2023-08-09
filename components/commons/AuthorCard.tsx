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
    <Pressable onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ position: "relative", zIndex: 20 }}>
          <View
            style={{
              marginTop: "auto",
              zIndex: 20,
              backgroundColor: COLORS.gray[50],
              padding: 10,
              borderRadius: 100,
            }}
          >
            <Image
              source={source}
              style={{
                width: 80,
                height: 80,
                resizeMode: "stretch",
                borderRadius: 80,
              }}
              onError={handleImageError}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: COLORS.gray[200],
              height: 50,
              width: "50%",
              right: -3,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: COLORS.gray[200],
            flex: 1,
            padding: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            position: "relative",
          }}
        >
          <View style={{ zIndex: 20 }}>
            <Text
              style={{
                fontSize: SIZES.md,
                fontWeight: "bold",
                color: COLORS.gray[800],
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontSize: SIZES.sm,
                color: COLORS.gray[800],
                marginTop: 5,
                fontWeight: "400",
              }}
            >
              {bio}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.sm,
                  fontWeight: "bold",
                  color: COLORS.rose[900],
                  marginRight: 10,
                }}
              >
                {quoteCount} {quoteCount > 1 ? "quotes" : "quote"}
              </Text>
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
                  width={25}
                  height={25}
                  stroke={true ? COLORS.rose[900] : COLORS.gray[500]}
                  fill={true ? COLORS.rose[900] : "none"}
                />
              </AnimatePressable>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
