import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HeaderHome from "../components/headers/HeaderHome";
import {UserContext} from "../contexts/UserContext";
import {MainStackNavigator} from "./MainStackNavigator";
import {ProfileStackNavigator} from "./ProfileStackNavigator";
import {useAuth} from "../hooks/useAuth";
import {Button, View} from "react-native";
import {AuthContext} from "../contexts/AuthContext";

const Tab = createDrawerNavigator();

export default function MyTabs({navigation}) {

    const {auth, state} = useAuth();
    const {logout} = React.useContext(AuthContext);

    return state.user ? (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: true, header: props => <HeaderHome navigation={navigation} {...props}/>}}
                        name="Your profile" component={HomeScreen}/>
            {
                state.user.idGroup ? (
                    <Tab.Screen name="Your buddies" component={HomeScreen}/>
                ) : (
                    <Tab.Screen name="Find a buddy" component={HomeScreen}/>
                )
            }
            <Tab.Screen name="Accomplishments" component={HomeScreen}/>
            <Tab.Screen name="Statistics" component={HomeScreen}/>
            <Tab.Screen name="For you" component={HomeScreen}/>
            <Tab.Screen name="Events" component={HomeScreen}/>
        </Tab.Navigator>
    ) : '';
}