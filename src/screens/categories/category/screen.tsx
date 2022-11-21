import React from 'react';
import {Container} from '../../../components/atoms/container';
import QuoteCard from '../../../components/molecules/quoteCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '..';
import {Pressable, View} from 'react-native';
import ArrowLeftIcon from '../../../icons/arrow';
import {theme} from '../../../assets/theme';
import {Text} from '../../../components/atoms/text';

type Props = NativeStackScreenProps<CategoryStackParams>;
const CategorySCreen = ({navigation}: Props) => {
  const handleQuotePress = (id: string) => {
    console.log(id);
    navigation.push('quote', {id});
  };
  const handleQuoteCopy = (id: string) => {
    console.log(id);
  };

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          height: 40,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
            left: 10,
          }}>
          <ArrowLeftIcon
            height={30}
            width={30}
            color={theme.colors.compliment}
          />
        </Pressable>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}} color="compliment">
            Fashion
          </Text>
        </View>
      </View>
      <QuoteCard
        content="consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit."
        author="Loas K.P"
        onCopy={() => handleQuoteCopy('copy)')}
        onLike={() => handleQuoteCopy('hhh)')}
        onDownload={() => handleQuoteCopy('hhh)')}
        onShare={() => handleQuoteCopy('hhh)')}
        onPress={() => handleQuotePress('hhh)')}
      />
      <QuoteCard
        content="consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit."
        author="Loas K.P"
        onCopy={() => handleQuoteCopy('copy)')}
        onLike={() => handleQuoteCopy('hhh)')}
        onDownload={() => handleQuoteCopy('hhh)')}
        onShare={() => handleQuoteCopy('hhh)')}
        onPress={() => handleQuotePress('hhh)')}
      />
      <QuoteCard
        content="consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit."
        author="Loas K.P"
        onCopy={() => handleQuoteCopy('copy)')}
        onLike={() => handleQuoteCopy('hhh)')}
        onDownload={() => handleQuoteCopy('hhh)')}
        onShare={() => handleQuoteCopy('hhh)')}
        onPress={() => handleQuotePress('hhh)')}
      />
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

export default CategorySCreen;
