import styled from '@emotion/native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width / 2 + 'px';

export const CategoryCardWrapper = styled.View`
  margin-top: 10px;
  width: 170px;
  min-width: 150px;
  width: ${width};
  max-width: 300px;
  margin-top: 20px;
  padding: 10px 20px;
`;
