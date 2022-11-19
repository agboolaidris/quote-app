import styled from '@emotion/native';
import {css} from '@emotion/react';
import {ColorType} from '../../assets/theme';

interface IText {
  color?: ColorType;
}
export const Text = styled.Text<IText>`
  color: ${({theme, color}) => theme.colors[color || 'accent50']};
  font-size: 14px;
`;
