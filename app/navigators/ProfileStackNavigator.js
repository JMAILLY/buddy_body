import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileStartScreen from '../screens/profile/ProfileStartScreen';

const ProfileStack = createStackNavigator();

export function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={'ProfileStart'}
        component={ProfileStartScreen}
      />
    </ProfileStack.Navigator>
  );
}
