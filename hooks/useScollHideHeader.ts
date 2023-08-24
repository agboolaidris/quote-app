import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList } from "react-native";

type ScrollHideHeaderOptions = {
  threshold?: number;
};

type ScrollHideHeaderResult = {
  scrollViewRef: React.RefObject<FlatList>;
  getHeaderOptions: (scrollY: number) => any;
};

export const useScrollHideHeader = (
  options?: ScrollHideHeaderOptions
): ScrollHideHeaderResult => {
  const scrollViewRef = useRef<FlatList>(null);
  useScrollToTop(scrollViewRef);

  const threshold = options?.threshold || 0;

  const getHeaderOptions = (scrollY: number): any => {
    const showHeader = scrollY <= threshold;

    return {
      headerShown: showHeader,
    };
  };

  return { scrollViewRef, getHeaderOptions };
};
