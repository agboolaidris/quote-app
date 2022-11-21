import styled from '@emotion/native';
import {css} from '@emotion/react';
// import {ColorType} from '../../assets/theme';

interface QuoteWrapperProps {
  // color?: ColorType;
}
export const QuoteWrapper = styled.Pressable<QuoteWrapperProps>`
  background-color: ${({theme}) => theme.colors['dominant']};
  padding: 20px;
  margin-top: 10px;
`;

export const IconView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const IconWrapper = styled.Pressable`
  background-color: ${({theme}) => theme.colors['dominant50']};
  padding: 5px;
  border-radius: 50px;
`;
