import { MainWrapper } from "@/components/commons/Wrapper";

import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions, View } from "react-native";
import { quotes } from "@/constants/data";
import { COLORS } from "@/constants";
import { ImageQuoteCard } from "@/components/commons/ImageQuoteCard";
import { Text } from "react-native";
import { BookMarkIcon } from "@/components/icons/BookMark";
import { AnimatePressable } from "@/components/commons/AnimatePressable";
import { ShareIcon } from "@/components/icons/Share";
import { ModalTypes, useModalStore } from "@/components/store/modalStore";
import { Quote, useQuoteBookmark } from "@/hooks/useBookmarkQuote";

type RandomQuoteProps = Quote;

const RandomQuote = (props: RandomQuoteProps) => {
  const { addQuoteToBookmark, bookmarkQuotes, removeQuoteToBookmark } =
    useQuoteBookmark();
  const { openModal } = useModalStore();
  const isBookmark = bookmarkQuotes?.find((quote) => quote._id === props._id);

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
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <ImageQuoteCard {...props} backgroundColor={COLORS.gray[100]} invent />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          columnGap: 30,
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <AnimatePressable
          onPress={handleShare}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.gray[100],
            borderRadius: 20,
          }}
        >
          <ShareIcon
            width={20}
            height={20}
            stroke={COLORS.gray[500]}
            fill={COLORS.gray[500]}
          />
        </AnimatePressable>
        <AnimatePressable
          onPress={handleAddQuoteToBookmark}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.gray[100],
            borderRadius: 20,
          }}
        >
          <BookMarkIcon
            width={20}
            height={20}
            stroke={isBookmark ? COLORS.rose[600] : COLORS.gray[500]}
            fill={isBookmark ? COLORS.rose[600] : COLORS.gray[500]}
          />
        </AnimatePressable>
      </View>
    </View>
  );
};

export default function RandomQuotes() {
  const width = Dimensions.get("screen").width - 20;

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  return (
    <MainWrapper>
      <View style={{ height: "100%", justifyContent: "center" }}>
        <View style={{ gap: 20 }}>
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <Text>
              {activeQuoteIndex + 1}/{quotes.length}
            </Text>
          </View>
          <Carousel
            data={quotes}
            onSnapToItem={setActiveQuoteIndex}
            renderItem={({ item }) => <RandomQuote {...item} />}
            sliderWidth={width}
            itemWidth={width}
            vertical={false}
          />
        </View>
      </View>
    </MainWrapper>
  );
}
