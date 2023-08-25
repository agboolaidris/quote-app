import { AuthorCard } from "@/components/commons/AuthorCard";
import { TopTabBar } from "@/components/commons/Header";

import { MainWrapper } from "@/components/commons/Wrapper";

import { TabView, SceneMap } from "react-native-tab-view";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { authors, catagories } from "@/constants/data";
import { CategoryCard } from "@/components/commons/CategoryCard";
import { QuoteCard } from "@/components/commons/QuoteCard";
import { COLORS } from "@/constants";
import { CustomFlatList } from "@/components/commons/CustomFlatList";
import { useQuote } from "@/hooks/useQuote";

const AuthorRoute = () => {
  return (
    <MainWrapper>
      <CustomFlatList
        data={authors}
        renderItem={({ item }) => <AuthorCard {...item} />}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.gray[200] }}></View>
        )}
      />
    </MainWrapper>
  );
};

const CategoryRoute = () => (
  <MainWrapper>
    <CustomFlatList
      data={catagories}
      renderItem={({ item }) => <CategoryCard {...item} />}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
    />
  </MainWrapper>
);

const AllQuotesRoute = () => {
  const { quotes, isLoadingQuotes } = useQuote();
  return (
    <MainWrapper>
      <CustomFlatList
        data={quotes}
        renderItem={({ item }) => <QuoteCard {...item} />}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.gray[200] }}></View>
        )}
      />
    </MainWrapper>
  );
};

const renderScene = SceneMap({
  categories: CategoryRoute,
  author: AuthorRoute,
  quotes: AllQuotesRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "author", title: "Authors" },
    { key: "categories", title: "Categories" },
    { key: "quotes", title: "All Quotes" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <SafeAreaView style={{ backgroundColor: COLORS.gray[50] }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <TopTabBar setIndex={setIndex} {...props} />
          </ScrollView>
        </SafeAreaView>
      )}
    />
  );
}
