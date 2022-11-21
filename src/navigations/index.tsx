import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {RootTabParams} from './type';
import CustomTabButtom from './components/tabBar';
import HomeIcon from '../icons/home';
import {theme} from '../assets/theme';
import {butomTabData} from '../contants/nav';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<RootTabParams>();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{tabBarStyle: {paddingTop: 10}, headerShown: false}}>
        {butomTabData.map(tab => (
          <Tab.Screen
            key={tab.route}
            name={tab.route}
            component={tab.screen}
            options={{
              headerTitle: tab.label,
              tabBarButton: props => (
                <CustomTabButtom
                  {...props}
                  icon={
                    <tab.Icon
                      width={30}
                      height={30}
                      color={
                        props.accessibilityState?.selected
                          ? theme.colors.dominant50
                          : theme.colors.compliment
                      }
                    />
                  }
                  label={tab.label}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
