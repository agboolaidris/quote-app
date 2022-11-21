import React from 'react';
import {IconView, IconWrapper, QuoteWrapper} from './style';
import {Text} from '../../atoms/text';
import DownloadIcon from '../../../icons/download';
import {theme} from '../../../assets/theme';
import LoveIcon from '../../../icons/love';
import CopyIcon from '../../../icons/copy';
import ShareIcon from '../../../icons/share';
import QuoteIcon from '../../../icons/quote';
import {Pressable, View} from 'react-native';

interface QuoteCardProps {
  onLike: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onShare: () => void;
  onPress: () => void;
  content: string;
  author: string;
}

const QuoteCard = (props: QuoteCardProps) => {
  return (
    <QuoteWrapper>
      <Pressable onPress={props.onPress}>
        <View style={{flexDirection: 'row'}}>
          <QuoteIcon width={10} height={10} color={theme.colors.compliment} />
          <Text
            style={{fontSize: 16, lineHeight: 22, marginLeft: 5}}
            color="compliment">
            {props.content}
          </Text>
        </View>
        <Text
          style={{textAlign: 'right', paddingTop: 10, fontWeight: 'bold'}}
          color="success">
          {props.author}
        </Text>
      </Pressable>
      <IconView>
        <IconWrapper onPress={props.onLike}>
          <LoveIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
        <IconWrapper onPress={props.onCopy}>
          <CopyIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
        <IconWrapper onPress={props.onDownload}>
          <DownloadIcon
            color={theme.colors.compliment}
            height={25}
            width={25}
          />
        </IconWrapper>
        <IconWrapper onPress={props.onShare}>
          <ShareIcon color={theme.colors.compliment} height={25} width={25} />
        </IconWrapper>
      </IconView>
    </QuoteWrapper>
  );
};

export default QuoteCard;
