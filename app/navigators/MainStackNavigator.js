import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from "../screens/ChatScreen";
import CalendarScreen from "../screens/CalendarScreen";
import TabNavigator from "./TabNavigator";
import CustomTabBar from "../components/CustomTabBar";
import HeaderStart from "../components/headers/HeaderStart";
import HeaderAuth from "../components/headers/HeaderAuth";
import HeaderReturn from "../components/headers/HeaderReturn";

const MainDrawer = createBottomTabNavigator();

export function MainStackNavigator() {
    return (
        <MainDrawer.Navigator tabBar={props => <CustomTabBar {...props} />} >
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
