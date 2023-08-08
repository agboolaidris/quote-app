import { AuthorCard } from "@/components/commons/AuthorCard";
import { Header } from "@/components/commons/Header";
import { MainWrapper } from "@/components/commons/Wrapper";
import { COLORS } from "@/constants";
import { useLocalSearchParams } from "expo-router";

import React from "react";
import { Text, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function AuthorScreen() {
  const { slug } = useLocalSearchParams();
  return (
    <MainWrapper>
      <Text>HHHHHKkk == {slug}</Text>
    </MainWrapper>
  );
}
