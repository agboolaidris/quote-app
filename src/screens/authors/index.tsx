import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthorsScreen from './screen';
import AuthorSCreen from './author/screen';
import QuoteScreen from './author/quote/screen';
export type CategoryStackParams = {
  authors: undefined;
  author: {
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
      <Stack.Screen name="authors" component={AuthorsScreen} />
      <Stack.Screen name="author" component={AuthorSCreen} />
      <Stack.Screen name="quote" component={QuoteScreen} />
    </Stack.Navigator>
  );
};

export default CategoryStack;
