import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from "../screens/ChatScreen";
import CalendarScreen from "../screens/CalendarScreen";
import TabNavigator from "./TabNavigator";

const MainDrawer = createBottomTabNavigator();

export function MainStackNavigator() {
  return (
    <MainDrawer.Navigator>
        <MainDrawer.Screen
            name={'Home'}
            component={TabNavigator}
            options={{
                title: 'Home',
            }}
        />
        <MainDrawer.Screen
            name={'Chat'}
            component={ChatScreen}
            options={{
                title: 'Chat',
            }}
        />
        <MainDrawer.Screen
            name={'Calendar'}
            component={CalendarScreen}
            options={{
                title: 'Calendar',
            }}
        />
    </MainDrawer.Navigator>
  );
}
