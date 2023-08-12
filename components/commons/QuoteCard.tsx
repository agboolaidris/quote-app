import { View, Text, Share } from "react-native";
import React, { useRef } from "react";
import { COLORS, SIZES } from "@/constants";
import { AnimatePressable } from "./AnimatePressable";
import { BookMarkIcon } from "../icons/BookMark";
import { ShareIcon } from "../icons/Share";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";

type QuoteCardProps = {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};
export const QuoteCard = ({ author, content, dateAdded }: QuoteCardProps) => {
  const ref = useRef<any>();

  const handleShare = async () => {
    try {
      const uri = await ref.current.capture();
      console.log("share");
      await Sharing.shareAsync(uri);
      console.log("after share");
      // Share.share({
      //   message: content,
      //   url: uri,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ViewShot
      ref={ref}
      options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}
    >
      <View
        style={{
          padding: 15,
        }}
      >
        <View
          style={{
            marginLeft: "auto",
            flexDirection: "row",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.sm,
              fontWeight: "400",
              color: COLORS.gray[400],
            }}
          >
            added {dateAdded}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: COLORS.gray[900] }}>{content}</Text>
          <Text
            style={{
              marginTop: 20,
              color: COLORS.gray[700],
              fontWeight: "500",
              lineHeight: 22,
            }}
          >
            "{author}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <AnimatePressable style={{ paddingHorizontal: 10 }}>
            <BookMarkIcon
              width={16}
              height={16}
              stroke={true ? COLORS.rose[600] : COLORS.gray[500]}
              fill={true ? COLORS.rose[600] : "none"}
            />
          </AnimatePressable>
          <AnimatePressable
            style={{ paddingHorizontal: 10 }}
            onPress={handleShare}
          >
            <ShareIcon
              width={16}
              height={16}
              stroke={COLORS.gray[500]}
              fill={COLORS.gray[500]}
            />
          </AnimatePressable>
        </View>
      </View>
    </ViewShot>
  );
};
