import styled from '@emotion/native';
import {ColorType} from '../../assets/theme';

interface IContainer {
  color?: ColorType;
}
export const Container = styled.SafeAreaView<IContainer>`
  background-color: ${({theme, color}) => theme.colors[color || 'dominant50']};
  flex: 1;
`;
