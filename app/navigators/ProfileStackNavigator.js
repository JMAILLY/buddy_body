import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileStartScreen from '../screens/profile/ProfileStartScreen';
import ProfileStep1Screen from "../screens/profile/ProfileStep1Screen";
import ProfileStep2Screen from "../screens/profile/ProfileStep2Screen";
import ProfileStep3Screen from "../screens/profile/ProfileStep3Screen";
import ProfileStep4Screen from "../screens/profile/ProfileStep4Screen";
import ProfileStep5Screen from "../screens/profile/ProfileStep5Screen";
import ProfileStep6Screen from "../screens/profile/ProfileStep6Screen";
import ProfileStep7Screen from "../screens/profile/ProfileStep7Screen";
import ProfileStep8Screen from "../screens/profile/ProfileStep8Screen";
import ProfileStep9Screen from "../screens/profile/ProfileStep9Screen";
import ProfileStep10Screen from "../screens/profile/ProfileStep10Screen";
import HeaderReturn from "../components/headers/HeaderReturn";

const ProfileStack = createStackNavigator();

export function ProfileStackNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name={'ProfileStart'}
                component={ProfileStartScreen}
                options={{headerShown: false}}
            />
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep1Screen'} component={ProfileStep1Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep2Screen'} component={ProfileStep2Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep3Screen'} component={ProfileStep3Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep4Screen'} component={ProfileStep4Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep5Screen'} component={ProfileStep5Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep6Screen'} component={ProfileStep6Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep7Screen'} component={ProfileStep7Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep8Screen'} component={ProfileStep8Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep9Screen'} component={ProfileStep9Screen}/>
            <ProfileStack.Screen options={{headerShown: true, header: props => <HeaderReturn {...props}/>}}
                                 name={'ProfileStep10Screen'} component={ProfileStep10Screen}/>
        </ProfileStack.Navigator>
    );
}
