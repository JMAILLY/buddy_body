import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import CalendarScreen from '../screens/CalendarScreen';
import {MainStackNavigator} from './MainStackNavigator';
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Tab = createDrawerNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Your profile" component={HomeScreen} />
            <Tab.Screen name="Your buddies"  component={HomeScreen} />
            <Tab.Screen name="Accomplishments"  component={HomeScreen} />
            <Tab.Screen name="Statistics"  component={HomeScreen} />
            <Tab.Screen name="For you"  component={HomeScreen} />
            <Tab.Screen name="Events"  component={HomeScreen} />
        </Tab.Navigator>
    );
}