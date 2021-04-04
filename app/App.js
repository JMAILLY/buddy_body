import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import config from './config';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import {AuthContext} from './contexts/AuthContext';
import {MainStackNavigator} from './navigators/MainStackNavigator';
// import {useAuth} from './hooks/useAuth';
import {UserContext} from './contexts/UserContext';
// import {SplashScreen} from './screens/SplashScreen';
// import {ThemeContext} from './contexts/ThemeContext';

function App() {

    const [users, setUsers] = useState([]);
    const RootStack = createStackNavigator();

    // useEffect(() => {
    //     //fetch test users form expressjs
    //     fetch(config.API_URL + '/users')
    //         .then((response) => response.json())
    //         .then((users) => setUsers(users))
    // }, []);

    function renderScreens() {

        return !users ? (
            <RootStack.Screen name={'MainStack'}>
                {() => (
                    <UserContext.Provider value={users[0]}>
                        <MainStackNavigator />
                    </UserContext.Provider>
                )}
            </RootStack.Screen>
        ) : (
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        );
    }

    return (
            <AuthContext.Provider value={''}>
                <NavigationContainer>
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

    // return (
    //     <View style={styles.container}>
            {/*<ul>*/}
            {/*    {users.map(user =>*/}
            {/*        <li key={user.id}>*/}
            {/*            {user.firstname}*/}
            {/*            {user.lastname}*/}
            {/*            {user.email}*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}
            {/*<NavigationContainer>*/}
            {/*    <Stack.Navigator>*/}
            {/*        <Stack.Screen name="Home" component={Home} />*/}
            {/*        <Stack.Screen name="Login" component={Login} />*/}
            {/*    </Stack.Navigator>*/}
            {/*</NavigationContainer>*/}
    //     </View>
    // );
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