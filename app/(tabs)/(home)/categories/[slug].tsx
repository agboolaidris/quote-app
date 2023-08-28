import React from "react";
import { View } from "react-native";
import { CustomFlatList } from "@/components/commons/CustomFlatList";
import { QuoteCard } from "@/components/commons/QuoteCard";
import { MainWrapper } from "@/components/commons/Wrapper";
import { COLORS } from "@/constants";
import { extractQuotesFromResponses, useQuote } from "@/hooks/useQuote";
import { useLocalSearchParams } from "expo-router";

export default function CategoryQuotesScreen() {
  const { slug } = useLocalSearchParams();
  const { pages, fetchNextPage } = useQuote(`tags=${slug}&`);

  const quotes = extractQuotesFromResponses(pages || []);

  const handleOnEndReach = () => {
    fetchNextPage();
  };

  return (
    <MainWrapper>
      <CustomFlatList
        data={quotes}
        renderItem={({ item }) => <QuoteCard {...item} />}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.gray[200] }}></View>
        )}
        onEndReached={handleOnEndReach}
      />
    </MainWrapper>
  );
}
