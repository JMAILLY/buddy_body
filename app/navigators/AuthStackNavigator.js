import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StartScreen from '../screens/StartScreen';
import TutorialScreen from '../screens/TutorialScreen';
import HeaderAuth from "../components/headers/HeaderAuth";
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
            <AuthStack.Screen options={{headerShown: true, header: props => <HeaderStart {...props}/>}}
                              name={'StartScreen'} component={StartScreen}/>
            <AuthStack.Screen name={'TutorialScreen'} component={TutorialScreen}/>
            <AuthStack.Screen name={'LoginStack'}>
                {() => (
                    <LoginStack.Navigator
                        mode={'card'}
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <LoginStack.Screen options={{headerShown: true, header: props => <HeaderAuth {...props}/>}}
                                           name={'LoginScreen'} component={LoginScreen}/>
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
                        <RegisterStack.Screen options={{headerShown: true, header: props => <HeaderAuth {...props}/>}}
                                              name={'RegisterScreen'} component={RegisterScreen}/>
                    </RegisterStack.Navigator>
                )}
            </AuthStack.Screen>
        </AuthStack.Navigator>
    );
}
