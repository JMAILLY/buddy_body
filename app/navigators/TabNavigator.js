import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from "@react-navigation/drawer";
import HeaderHome from "../components/headers/HeaderHome";

const Tab = createDrawerNavigator();

export default function MyTabs({navigation}) {

    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: true, header: props => <HeaderHome navigation={navigation} {...props}/>}}
                        name="Your profile" component={HomeScreen}/>
            <Tab.Screen name="Your buddies" component={HomeScreen}/>
            <Tab.Screen name="Accomplishments" component={HomeScreen}/>
            <Tab.Screen name="Statistics" component={HomeScreen}/>
            <Tab.Screen name="For you" component={HomeScreen}/>
            <Tab.Screen name="Events" component={HomeScreen}/>
        </Tab.Navigator>
    );
}