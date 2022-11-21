import {StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import styled from '@emotion/native';
import {Text} from './text';
import HomeIcon from '../../icons/home';
import {ColorType, theme} from '../../assets/theme';
const ButtonWrapper = styled.Pressable<{color?: ColorType}>`
  border-radius: 10px;
  height: 50px;
  background-color: ${({theme, color}) => theme.colors[color || 'success']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  content: string;
  icon: ReactNode;
  onPress?: () => void;
  bg?: ColorType;
  color?: ColorType;
}
const Button = ({style, content, icon, onPress, bg, color}: ButtonProps) => {
  return (
    <ButtonWrapper
      style={style}
      onPress={() => onPress && onPress()}
      color={bg}>
      <Text
        color={color || 'dominant'}
        style={{fontSize: 16, fontWeight: 'bold'}}>
        {content}
      </Text>
      {icon}
    </ButtonWrapper>
  );
};

export default Button;
