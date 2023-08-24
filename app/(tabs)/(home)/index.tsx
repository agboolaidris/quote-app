import { AuthorCard } from "@/components/commons/AuthorCard";
import { TopTabBar } from "@/components/commons/Header";

import { MainWrapper } from "@/components/commons/Wrapper";

import { TabView, SceneMap } from "react-native-tab-view";
import React, { useCallback } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { authors, catagories, quotes } from "@/constants/data";
import { CategoryCard } from "@/components/commons/CategoryCard";
import { QuoteCard } from "@/components/commons/QuoteCard";
import { COLORS } from "@/constants";
import { CustomFlatList } from "@/components/commons/CustomFlatList";

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

const FamousQuotesRoute = () => (
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

const renderScene = SceneMap({
  categories: CategoryRoute,
  author: AuthorRoute,
  famousQuotes: FamousQuotesRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "author", title: "Authors" },
    { key: "categories", title: "Categories" },
    { key: "famousQuotes", title: "Popular Quotes" },
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
