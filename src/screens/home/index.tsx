import {View, Text} from 'react-native';
import React from 'react';
import {Container} from '../../components/atoms/container';
import QuoteCard from '../../components/molecules/quoteCard';

const HomeScreen = () => {
  return (
    <Container>
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
    </Container>
  );
};

export default HomeScreen;
