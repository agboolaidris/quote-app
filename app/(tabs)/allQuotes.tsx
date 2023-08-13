import { MainWrapper } from "@/components/commons/Wrapper";

import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { quotes } from "@/constants/data";
import { QuoteCard } from "@/components/commons/QuoteCard";
import { COLORS } from "@/constants";

export default function TabViewExample() {
  return (
    <MainWrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={quotes}
        renderItem={({ item }) => <QuoteCard {...item} />}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.gray[200] }}></View>
        )}
      />
    </MainWrapper>
  );
}
