import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StartScreen from '../screens/StartScreen';
import TutorialScreen from '../screens/TutorialScreen';
import HeaderReturn from "../components/headers/HeaderReturn";
import HeaderStart from "../components/headers/HeaderStart";

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
        <AuthStack.Screen options={{headerShown: true, header: props => <HeaderStart {...props}/> }} name={'Start'} component={StartScreen} />
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
        <AuthStack.Screen name={'RegisterStack'} >
            {() => (
                <RegisterStack.Navigator
                    mode={'card'}
                    screenOptions={{
                      headerShown: false,
                    }}>
                    <RegisterStack.Screen name={'RegisterScreen'} component={RegisterScreen} />
                </RegisterStack.Navigator>
            )}
        </AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
