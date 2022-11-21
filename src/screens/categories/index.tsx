import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screen';
import CategorySCreen from './category/screen';
import QuoteScreen from './category/quote/screen';

export type CategoryStackParams = {
  categories: undefined;
  category: {
    id: string;
  };
  quote: {
    id: string;
  };
};
const Stack = createNativeStackNavigator<CategoryStackParams>();

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="categories" component={CategoriesScreen} />
      <Stack.Screen name="category" component={CategorySCreen} />
      <Stack.Screen name="quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
