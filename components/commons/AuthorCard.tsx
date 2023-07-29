import { View, Text, Image, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES } from "@/constants";

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

export const AuthorCard = ({ name, slug }: AuthorCardProps) => {
  const [source, setSource] = useState<ImageSourcePropType>({
    uri: `https://images.quotable.dev/profile/200/${slug}.jpg`,
  });

  const handleImageError = () => {
    // Update the image source to fallback URI when the original image fails to load
    setSource(require("@/assets/images/avatar.jpg"));
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.gray[200],
        padding: 5,
      }}
    >
      <Image
        source={source}
        style={{
          width: "100%",
          height: 110,
          resizeMode: "stretch",
        }}
        onError={handleImageError}
      />

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.sm,
            textAlign: "center",
            fontWeight: "bold",
            color: COLORS.gray[800],
          }}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};
