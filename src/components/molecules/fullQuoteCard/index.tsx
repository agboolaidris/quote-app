import {View} from 'react-native';
import React from 'react';
import {
  ButtonWrapper,
  FullQuoteHeader,
  FullQuoteWrapper,
  IconWrapper,
} from './style';
import ArrowLeftIcon from '../../../icons/arrow';
import {theme} from '../../../assets/theme';
import {Text} from '../../atoms/text';
import {useNavigation} from '@react-navigation/native';
import QuoteIcon from '../../../icons/quote';
import Button from '../../atoms/button';

const FullQuoteCard = () => {
  const navigation = useNavigation();
  return (
    <FullQuoteWrapper>
      <FullQuoteHeader>
        <IconWrapper onPress={() => navigation.goBack()}>
          <ArrowLeftIcon
            height={30}
            width={30}
            color={theme.colors.compliment}
          />
        </IconWrapper>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}} color="compliment">
            Fashion
          </Text>
        </View>
      </FullQuoteHeader>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          padding: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <QuoteIcon width={10} height={10} color={theme.colors.compliment} />
          <Text
            style={{fontSize: 16, lineHeight: 22, marginLeft: 5}}
            color="compliment">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            molestias doloribus sed. Rem optio numquam modi, distinctio vel
            molestiae. Quasi perferendis sapiente ipsam dolore sit maxime,
            adipisci nesciunt laborum exercitationem.
          </Text>
        </View>
        <Text
          style={{textAlign: 'right', paddingTop: 10, fontWeight: 'bold'}}
          color="success">
          Luis K.O
        </Text>
      </View>
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    </FullQuoteWrapper>
  );
};

export default FullQuoteCard;
