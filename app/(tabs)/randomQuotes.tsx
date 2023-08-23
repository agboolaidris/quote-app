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
import { Quote } from "@/hooks/useQuote";

export default function RandomQuotes() {
  const width = Dimensions.get("screen").width - 20;

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const { openModal } = useModalStore();
  const handleShare = async (quote: Quote) => {
    openModal(ModalTypes.SHARE_MODAL, { quote });
  };

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
            pagingEnabled
            onSnapToItem={setActiveQuoteIndex}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                }}
              >
                <ImageQuoteCard
                  {...item}
                  backgroundColor={COLORS.gray[100]}
                  invent
                />
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
                  <AnimatePressable onPress={() => handleShare(item)}>
                    <ShareIcon
                      width={20}
                      height={20}
                      stroke={COLORS.gray[500]}
                      fill={COLORS.gray[500]}
                    />
                  </AnimatePressable>
                  <AnimatePressable style={{}}>
                    <BookMarkIcon
                      width={20}
                      height={20}
                      stroke={true ? COLORS.rose[600] : COLORS.gray[500]}
                      fill={true ? COLORS.rose[600] : "none"}
                    />
                  </AnimatePressable>
                </View>
              </View>
            )}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
      </View>
    </MainWrapper>
  );
}
