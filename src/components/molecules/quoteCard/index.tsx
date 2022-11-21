import React from 'react';
import {IconView, IconWrapper, QuoteWrapper} from './style';
import {Text} from '../../atoms/text';
import DownloadIcon from '../../../icons/download';
import {theme} from '../../../assets/theme';
import LoveIcon from '../../../icons/love';
import CopyIcon from '../../../icons/copy';
import ShareIcon from '../../../icons/share';
import QuoteIcon from '../../../icons/quote';
import {View} from 'react-native';

interface QuoteCardProps {
  onLike: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onShare: () => void;
  content: string;
  author: string;
}

const QuoteCard = () => {
  return (
    <QuoteWrapper>
      <View style={{flexDirection: 'row'}}>
        <QuoteIcon width={10} height={10} color={theme.colors.compliment} />
        <Text
          style={{fontSize: 16, lineHeight: 22, marginLeft: 5}}
          color="compliment">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          recusandae perferendis dignissimos, quam molestias,
        </Text>
      </View>
      <Text
        style={{textAlign: 'right', paddingTop: 10, fontWeight: 'bold'}}
        color="success">
        J.0 Laos
      </Text>
      <IconView>
        <IconWrapper>
          <LoveIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
        <IconWrapper>
          <CopyIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
        <IconWrapper>
          <DownloadIcon
            color={theme.colors.compliment}
            height={25}
            width={25}
          />
        </IconWrapper>
        <IconWrapper>
          <ShareIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
      </IconView>
    </QuoteWrapper>
  );
};

export default QuoteCard;
