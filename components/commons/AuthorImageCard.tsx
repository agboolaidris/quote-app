import {
  ImageSourcePropType,
  Image,
  StyleProp,
  ImageStyle,
} from "react-native";
import React, { useState } from "react";

type AuthorImageCardProp = {
  slug: string;
  style?: StyleProp<ImageStyle>;
};
export const AuthorImageCard = ({ slug, style }: AuthorImageCardProp) => {
  const [source, setSource] = useState<ImageSourcePropType>({
    uri: `https://images.quotable.dev/profile/200/${slug}.jpg`,
  });

  const handleImageError = () => {
    // Update the image source to fallback URI when the original image fails to load
    setSource(require("@/assets/images/avatar.jpg"));
  };
  return <Image source={source} style={style} onError={handleImageError} />;
};
