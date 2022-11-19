import React, {ReactElement, ReactNode} from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import styled from '@emotion/native';
import {Text} from '../../components/atoms/text';
import {View} from 'react-native';

export const TabButtomWrapper = styled.Pressable`
  flex: 1;
  align-items: center;
`;

export const TabButtomCircle = styled.View<{active: boolean}>`
  padding: 5px 10px;
  background-color: ${({theme, active}) =>
    active ? theme.colors.compliment : undefined};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

interface ICustomTabButtom extends BottomTabBarButtonProps {
  label: string;
  icon: ReactElement;
}

const CustomTabButtom = ({
  onPress,
  accessibilityState,
  label,
  icon,
}: ICustomTabButtom) => {
  return (
    <TabButtomWrapper onPress={onPress}>
      <TabButtomCircle active={accessibilityState?.selected || false}>
        {icon}
        {accessibilityState?.selected ? (
          <Text
            color="dominant50"
            style={{fontSize: 16, marginLeft: 5, fontWeight: 'bold'}}>
            {label}
          </Text>
        ) : null}
      </TabButtomCircle>
    </TabButtomWrapper>
  );
};

export default CustomTabButtom;
