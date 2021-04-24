import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import config from './config';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {MainStackNavigator} from './navigators/MainStackNavigator';
import {ProfileStackNavigator} from './navigators/ProfileStackNavigator';
import {UserContext} from './contexts/UserContext';
import {AuthContext} from './contexts/AuthContext';
import {useAuth} from './hooks/useAuth';

const RootStack = createStackNavigator();

function App() {

    const {auth, state} = useAuth();

    const lightTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            backgroundColor: 'white',
            primary: 'purple',
            text: 'black',
        },
    };

    function renderScreens() {

        return state.user ? (
            <RootStack.Screen name={'MainStack'}>
                {() => (
                    state.user.firstname && state.user.lastname ? (
                        <UserContext.Provider value={state.user}>
                            <MainStackNavigator />
                        </UserContext.Provider>
                    ) : (
                        <UserContext.Provider value={state.user}>
                            <ProfileStackNavigator />
                        </UserContext.Provider>
                    )
                )}
            </RootStack.Screen>
        ) : (
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        );
    }

    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer theme={lightTheme}>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animationEnabled: false,
                    }}>
                    {renderScreens()}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App