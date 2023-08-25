import { View, Text } from "react-native";
import React from "react";
import { COLORS, SIZES } from "@/constants";
import { AnimatePressable } from "./AnimatePressable";
import { BookMarkIcon } from "../icons/BookMark";
import { ShareIcon } from "../icons/Share";
import { ModalTypes, useModalStore } from "../store/modalStore";
import { QuoteIcon } from "../icons/Quote";
import { useQuoteBookmark } from "@/hooks/useBookmarkQuote";
import { Quote } from "@/hooks/useQuote";

export type QuoteCardProps = Quote;
export const QuoteCard = (props: QuoteCardProps) => {
  const { author, content, dateAdded, _id } = props;
  const { openModal } = useModalStore();
  const { addQuoteToBookmark, bookmarkQuotes, removeQuoteToBookmark } =
    useQuoteBookmark();

  const isBookmark = bookmarkQuotes?.find((quote) => quote._id === _id);

  const handleShare = async () => {
    openModal(ModalTypes.SHARE_MODAL, { quote: props });
  };

  const handleAddQuoteToBookmark = async () => {
    try {
      if (isBookmark) {
        await removeQuoteToBookmark(props);
      } else {
        await addQuoteToBookmark(props);
      }
    } catch (error) {}
  };

  return (
    <View
      style={{
        paddingVertical: 5,
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
        <Text style={{ color: COLORS.gray[900] }}>
          <QuoteIcon width={20} height={20} color={COLORS.gray[900]} />
          {content}
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: COLORS.gray[700],
            fontWeight: "500",
            lineHeight: 22,
          }}
        >
          {author}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          rowGap: 4,
          columnGap: 9,
        }}
      >
        <AnimatePressable
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.gray[100],
            borderRadius: 20,
          }}
          onPress={handleAddQuoteToBookmark}
        >
          <BookMarkIcon
            width={12}
            height={12}
            stroke={isBookmark ? COLORS.rose[600] : COLORS.gray[500]}
            fill={isBookmark ? COLORS.rose[600] : COLORS.gray[500]}
          />
        </AnimatePressable>
        <AnimatePressable
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.gray[100],
            borderRadius: 20,
          }}
          onPress={handleShare}
        >
          <ShareIcon
            width={12}
            height={12}
            stroke={COLORS.gray[500]}
            fill={COLORS.gray[500]}
          />
        </AnimatePressable>
      </View>
    </View>
  );
};
