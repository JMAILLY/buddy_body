import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreenMail from '../screens/RegisterScreenMail';
import RegisterScreenPassword from '../screens/RegisterScreenPassword';
import StartScreen from '../screens/StartScreen';
import TutorialScreen from '../screens/TutorialScreen';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
const RegisterStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
        <AuthStack.Screen name={'Start'} component={StartScreen} />
        <AuthStack.Screen name={'Tutorial'} component={TutorialScreen} />
        <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name={'Login'} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
        </AuthStack.Screen>
        <AuthStack.Screen name={'RegisterStack'}>
            {() => (
                <RegisterStack.Navigator
                    mode={'card'}
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <RegisterStack.Screen name={'RegisterMail'} component={RegisterScreenMail} />
                    <RegisterStack.Screen name={'RegisterPassword'} component={RegisterScreenPassword} />
                </RegisterStack.Navigator>
            )}
        </AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
