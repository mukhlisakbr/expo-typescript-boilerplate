/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { HomeScreen } from '../screens/home-screen';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
// import { AboutScreen } from '../screens/about-screen';

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
          activeTintColor: '#ffffff',
          inactiveTintColor: '#223322',
          activeBackgroundColor: 'red',
        }}
        appearance={{
          shadow: true,
          floating: true,
          whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
          dotSize: DotSize.SMALL,
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
          component={HomeScreen}
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
