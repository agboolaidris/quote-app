import {View, Text} from 'react-native';
import React from 'react';
import {Container} from '../../components/atoms/container';
import QuoteCard from '../../components/molecules/quoteCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen';
import Home_IDScreen from './_id/screen';

export type HometackParams = {
  home: undefined;
  homeId: {
    id: string;
  };
};
const Stack = createNativeStackNavigator<HometackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="homeId" component={Home_IDScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
