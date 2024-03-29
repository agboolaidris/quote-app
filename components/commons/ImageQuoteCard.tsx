import { View, Text, Dimensions } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";
import { AuthorImageCard } from "./AuthorImageCard";
import { lightenHexColor } from "@/utils/hexToRgba";
import { QuoteIcon } from "../icons/Quote";

type ImageQuoteCardProps = {
  backgroundColor: string;
  content: string;
  author: string;
  authorSlug: string;
  invent?: boolean;
};

export const ImageQuoteCard = ({
  backgroundColor,
  content,
  author,
  authorSlug,
  invent,
}: ImageQuoteCardProps) => {
  return (
    <View
      style={{
        backgroundColor,
        minHeight: Dimensions.get("screen").width + 50,
        width: Dimensions.get("screen").width - 50,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: invent ? COLORS.gray[700] : COLORS.gray[50],
            fontWeight: "800",
            fontSize: SIZES.xl,
          }}
        >
          <QuoteIcon
            width={30}
            height={30}
            color={
              invent ? COLORS.rose[900] : lightenHexColor(backgroundColor, 40)
            }
          />
          {content}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: invent
              ? COLORS.gray[50]
              : lightenHexColor(backgroundColor, 40),
            overflow: "hidden",
            backgroundColor: invent
              ? COLORS.gray[50]
              : lightenHexColor(backgroundColor, 40),
          }}
        >
          <AuthorImageCard
            slug={authorSlug}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <Text
          style={{
            color: invent ? COLORS.gray[700] : COLORS.gray[50],
            fontWeight: "800",
            marginTop: 5,
          }}
        >
          {author}
        </Text>
      </View>
    </View>
  );
};
