/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { HomeScreen } from '../screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AboutScreen } from '../screens/AboutScreen';

const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props: any) => {
  return (
    <AntDesign
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'black',
          tabStyle: { paddingBottom: 20 },
        }}
        appearance={{
          shadow: true,
          floating: false,
          whenActiveShow: TabElementDisplayOptions.BOTH,
          dotSize: DotSize.SMALL,
          horizontalPadding: 50,
          dotCornerRadius: 50,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon focused={focused} tintColor={color} name="home" />
            ),
          }}
        />
        <Tabs.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={color}
                name="infocirlceo"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
