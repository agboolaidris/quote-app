import React from 'react';
import {Container} from '../../components/atoms/container';
import QuoteCard from '../../components/molecules/quoteCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HometackParams} from '.';

type Props = NativeStackScreenProps<HometackParams>;
const HomeScreen = ({navigation}: Props) => {
  const handleQuotePress = (id: string) => {
    console.log(id);
    navigation.push('homeId', {id});
  };
  const handleQuoteCopy = (id: string) => {
    console.log(id);
  };

  return (
    <Container>
      <QuoteCard
        content="consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit."
        author="Loas K.P"
        onCopy={() => handleQuoteCopy('copy)')}
        onLike={() => handleQuoteCopy('hhh)')}
        onDownload={() => handleQuoteCopy('hhh)')}
        onShare={() => handleQuoteCopy('hhh)')}
        onPress={() => handleQuotePress('hhh)')}
      />
    </Container>
  );
};

export default HomeScreen;
