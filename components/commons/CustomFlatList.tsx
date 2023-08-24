import { useScrollHideHeader } from "@/hooks/useScollHideHeader";
import { useNavigation } from "expo-router";
import React from "react";

import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatListProps,
} from "react-native";

type CustomFlatListProps<ItemT> = FlatListProps<ItemT>; // Include all FlatListProps as well

export const CustomFlatList = <ItemT extends any>(
  props: CustomFlatListProps<ItemT>
) => {
  const navigation = useNavigation();
  const { scrollViewRef, getHeaderOptions } = useScrollHideHeader();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    navigation.setOptions(getHeaderOptions(scrollY));
  };
  return (
    <FlatList
      ref={scrollViewRef}
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ height: "100%" }}
      {...props}
    />
  );
};
